import { createContext, useState, useEffect } from "react";

import beep from "../audio/beep.wav";
import restaudio from "../audio/rest.wav";
import go from "../audio/go.wav";
import stop from "../audio/stop.wav";
import victory from "../audio/victory.wav";

const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {
  // sounds used in the app
  const [audioRest] = useState(new Audio(restaudio));
  const [audioGo] = useState(new Audio(go));
  const [audioStop] = useState(new Audio(stop));
  const [audioVictory] = useState(new Audio(victory));
  const [audio, setAudio] = useState();
  //enable sounds or disable them
  const [mute, setMute] = useState(true);

  //important to trick the Safari Iphone autoplay restrictions (the issue persists anyway)
  const handleVolume = () => {
    setAudio(new Audio(beep));
    setMute(!mute);
  };

  // default starting values
  const NR_PREPARE = 4;
  const NR_WORK = 20;
  const NR_REST = 10;
  const NR_WAIT = 60;

  const NR_TABATAS = 1;
  const NR_CYCLES = 8;

  const [prepareInit, setPrepareInit] = useState(NR_PREPARE);
  const [workInit, setWorkInit] = useState(NR_WORK);
  const [restInit, setRestInit] = useState(NR_REST);
  const [tabatasInit, setTabatasInit] = useState(NR_TABATAS);
  const [cyclesInit, setCyclesInit] = useState(NR_CYCLES);

  const [prepare, setPrepare] = useState(NR_PREPARE);
  const [work, setWork] = useState(NR_WORK);
  const [rest, setRest] = useState(NR_REST);
  const [wait, setWait] = useState(NR_WAIT);
  const [tabatas, setTabatas] = useState(NR_TABATAS);
  const [cycles, setCycles] = useState(NR_CYCLES);
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [pauseMode, setPauseMode] = useState(false); // it could be paused (false), on-going (true)
  const [timer, setTimer] = useState();
  const [flow, setFlow] = useState("prepare");

  /**
   * Logic to set the initial values before starting the workout
   */

  const setFunctions = {
    prepare: (nr) => {setPrepare(nr); setPrepareInit(nr);},
    work: (nr) => {setWork(nr); setWorkInit(nr);},
    rest: (nr) => {setRest(nr);setRestInit(nr);}, 
    tabatas: (nr) => {setTabatas(nr); setTabatasInit(nr);},
    cycles: (nr) => {setCycles(nr); setCyclesInit(nr);}
  }

  const handleSet = (type) => (nr) => () => {
    setFunctions[type](nr);
  };



  /**
   * Logic to start, pause and stop the workout
   */

  const handleStartStop = () => {
    // When the Start/Stop button is clicked and the current mode is working, it stops the timer and resets
    if (generalMode) {
      clearTimeout(timer);

      setPrepare(prepareInit);
      setWork(workInit);
      setRest(restInit);
      setCycles(cyclesInit);
      setTabatas(tabatasInit);

      setPauseMode(false);
      setFlow("prepare");
      !mute && audioStop.play();
    }
    // In any case, the mode is toggled
    setGeneralMode(!generalMode);
  };

  const handleStartPause = () => {
    // When the Start/Pause button is clicked and the current mode is working, it stops the timer but does not reset
    if (generalMode && pauseMode) {
      clearTimeout(timer);
    }
    // If the generalMode is active, the pause mode is toggled
    generalMode && setPauseMode(!pauseMode);
  };

  /**
   * Logic for the workout flow
   */

   const setTimeoutTimer = (setFunction, type, setTimer) => {
    const interval = setTimeout(() => {
      setFunction(type - 1);
    }, 1000);
    setTimer(interval);
  }

  useEffect(() => {
    // In this first approach, the prepare calls the work when it ends
    const prepareCountDown = () => {
      if (prepare > 0 && prepare < 4) {
        !mute && audio.play();
      }
      if (prepare === 0) {
        setFlow("work");
        workCountDown();
      } else {
        setTimeoutTimer(setPrepare, prepare, setTimer);
      }
    };
    // In this first approach, the work calls the rest when it ends
    const workCountDown = () => {
      if (work === workInit) {
          !mute && audioGo.play();
      } else if (work > 0 && work < 4) {
        !mute && audio.play();
      }
      if (work === 0) {
        if (cycles === 1 && tabatas === 1) {
          !mute && audioVictory.play();
          setPrepare(prepareInit);
          setWork(workInit);
          setRest(restInit);
          setCycles(cyclesInit);
          setTabatas(tabatasInit);
          setFlow("prepare");
          setGeneralMode(false);
        } else if (cycles === 1 && tabatas > 1) {
          setFlow("wait");
          waitCountDown();
        } else {
          setFlow("rest");
          restCountDown();
        }
      } else {
        setTimeoutTimer(setWork, work, setTimer);
      }
    };

    // In this first approach, the work calls the rest when it ends
    const restCountDown = () => {
      if (rest === restInit) {
        !mute && audioRest.play();
      } else if (rest > 0 && rest < 4) {
        !mute && audio.play();
      }
      if (rest === 0) {
        setFlow("work");
        // While there are active cycles, the work-rest timers are reset and the cycle count is decreased
        if (cycles > 1) {
          setWork(workInit);
          setRest(restInit);
          setCycles(cycles - 1);
        } else if (cycles === 1 && tabatas > 1) {
          setCycles(cyclesInit);
          setWork(workInit);
          setRest(restInit);
          setTabatas(tabatas - 1);
        }
      } else {
        setTimeoutTimer(setRest, rest, setTimer);
      }
    };

    // At the end of the wait, the flow is set to work and the number of tabatas decreased by one
    const waitCountDown = () => {

      if (wait > 0 && wait < 4) {
        !mute && audio.play();
      } 
      if (wait === 0) {
        setFlow("work");    
        setWait(NR_WAIT);    
        setCycles(cyclesInit);
        setWork(workInit);
        setRest(restInit);
        setTabatas(tabatas - 1);
        
      } else {
        setTimeoutTimer(setWait, wait, setTimer);
      }
    };

    // This triggers the full cycle prepare-work-rest
    if (generalMode && !pauseMode) {
      prepareCountDown();
    }
  }, [
    generalMode,
    prepare,
    work,
    rest,
    pauseMode,
    cycles,
    tabatas,
    workInit,
    restInit,
    cyclesInit,
    prepareInit,
    tabatasInit,
    audioGo,
    audioRest,
    audioVictory,
    audioStop,
    audio,
    mute,
    wait,
  ]);

  /**
   * States and handlers to be provided by the Context
   */

  return (
    <FreeTabataContext.Provider
      value={{
        prepare,
        work,
        rest,
        wait,
        tabatas,
        cycles,
        generalMode,
        handleStartStop,
        pauseMode,
        handleStartPause,
        timer,
        prepareInit,
        workInit,
        restInit,
        tabatasInit,
        cyclesInit,
        flow,
        handleVolume,
        mute,
        handleSet
      }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;



