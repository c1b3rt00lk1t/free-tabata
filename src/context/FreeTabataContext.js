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
    !generalMode && setAudio(new Audio(beep));
    !generalMode && setMute(!mute);
  };

  // default starting values
  const NR_PREPARE = 4;
  const NR_WORK = 20;
  const NR_REST = 10;
  const NR_WAIT = 60;

  const NR_TABATAS = 1;
  const NR_CYCLES = 8;


  const [prepare, setPrepare] = useState({initial: NR_PREPARE, current: NR_PREPARE});
  const [work, setWork] = useState({initial: NR_WORK, current: NR_WORK});
  const [rest, setRest] = useState({initial: NR_REST, current: NR_REST});
  const [wait, setWait] = useState({initial: NR_WAIT, current: NR_WAIT});
  const [tabatas, setTabatas] = useState({initial: NR_TABATAS, current: NR_TABATAS});
  const [cycles, setCycles] = useState({initial: NR_CYCLES, current: NR_CYCLES});
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [pauseMode, setPauseMode] = useState(false); // it could be paused (false), on-going (true)
  const [timer, setTimer] = useState();
  const [flow, setFlow] = useState("prepare");

  /**
   * Logic to set the initial values before starting the workout
   */

  const setFunctions = {
    prepare: (nr) => setPrepare({initial: nr, current: nr}),
    work: (nr) => setWork({initial: nr, current: nr}),
    rest: (nr) => setRest({initial: nr, current: nr}), 
    tabatas: (nr) => setTabatas({initial: nr, current: nr}),
    cycles: (nr) => setCycles({initial: nr, current: nr})
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

      setPrepare({...prepare,current: prepare.initial});
      setWork({...work,current: work.initial});
      setRest({...rest,current: rest.initial});
      setCycles({...cycles,current: cycles.initial});
      setTabatas({...tabatas,current: tabatas.initial});
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
      setFunction({...type, current: type.current - 1});
    }, 1000);
    setTimer(interval);
  }

  useEffect(() => {
    // In this first approach, the prepare calls the work when it ends
    const prepareCountDown = () => {
      if (prepare.current > 0 && prepare.current < 4) {
        !mute && audio.play();
      }
      if (prepare.current === 0) {
        setFlow("work");
        workCountDown();
      } else {
        setTimeoutTimer(setPrepare, prepare, setTimer);
      }
    };
    // In this first approach, the work calls the rest when it ends
    const workCountDown = () => {
      if (work.current === work.initial) {
          !mute && audioGo.play();
      } else if (work.current > 0 && work.current < 4) {
        !mute && audio.play();
      }
      if (work.current === 0) {
        if (cycles.current === 1 && tabatas.current === 1) {
          !mute && audioVictory.play();
          setPrepare({...prepare,current: prepare.initial});
          setWork({...work,current: work.initial});
          setRest({...rest,current: rest.initial});
          setCycles({...cycles,current: cycles.initial});
          setTabatas({...tabatas,current: tabatas.initial});
          setFlow("prepare");
          setGeneralMode(false);
        } else if (cycles.current === 1 && tabatas.current > 1) {
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
      if (rest.current === rest.initial) {
        !mute && audioRest.play();
      } else if (rest.current > 0 && rest.current < 4) {
        !mute && audio.play();
      }
      if (rest.current === 0) {
        setFlow("work");
        // While there are active cycles, the work-rest timers are reset and the cycle count is decreased
        if (cycles.current > 1) {
          setWork({...work,current: work.initial});
          setRest({...rest,current: rest.initial});
          setCycles({...cycles,current: cycles.current -1});
        } else if (cycles.current === 1 && tabatas.current > 1) {
          setCycles({...cycles,current: cycles.initial});
          setWork({...work,current: work.initial});
          setRest({...rest,current: rest.initial});
          setTabatas({...tabatas,current: tabatas.current -1});
        }
      } else {
        setTimeoutTimer(setRest, rest, setTimer);
      }
    };

    // At the end of the wait, the flow is set to work and the number of tabatas decreased by one
    const waitCountDown = () => {

      if (wait.current > 0 && wait.current < 4) {
        !mute && audio.play();
      } 
      if (wait.current === 0) {
        setFlow("work");    
        setWait({...wait,current: wait.initial});    
        setCycles({...cycles,current: cycles.initial});
        setWork({...work,current: work.initial});
        setRest({...rest,current: rest.initial});
        setTabatas({...tabatas,current: tabatas.current -1});
        
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



