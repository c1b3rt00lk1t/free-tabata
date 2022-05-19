import { createContext, useState, useEffect } from "react";

import beep from "../audio/beep.wav"
import restaudio from "../audio/rest.wav"
import go from "../audio/go.wav"
import stop from "../audio/stop.wav"
import victory from "../audio/victory.wav"


const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {

  // sounds used in the app
  const [audioBeep] = useState(new Audio(beep));
  const [audioRest] = useState(new Audio(restaudio));
  const [audioGo] = useState(new Audio(go));
  const [audioStop] = useState(new Audio(stop));
  const [audioVictory] = useState(new Audio(victory));

  // default values for testing
  const NR_PREPARE = 5;
  const NR_WORK = 20;
  const NR_REST = 10;
  
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
  const [tabatas, setTabatas] = useState(NR_TABATAS);
  const [cycles, setCycles] = useState(NR_CYCLES);
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [pauseMode, setPauseMode] = useState(false); // it could be paused (false), on-going (true)
  const [timer, setTimer] = useState();
  const [flow,setFlow] = useState('prepare');

  /**
   * Logic to set the initial values before starting the workout
   */
  const handleSetprepare = (nr) => ( ) => {
    setPrepareInit(nr);
    setPrepare(nr);
  };

  const handleSetwork = (nr) => ( ) => {
    setWorkInit(nr);
    setWork(nr);
  };

  const handleSetrest =  (nr) =>( ) => {
    setRestInit(nr);
    setRest(nr);
  };

  const handleSettabatas =  (nr) =>( ) => {
    setTabatasInit(nr);
    setTabatas(nr);
  };
  const handleSetcycles =  (nr) =>( ) => {
    setCyclesInit(nr);
    setCycles(nr);
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
      setFlow('prepare');
      audioStop.play();
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

  useEffect(() => {
    // In this first approach, the prepare calls the work when it ends
    const prepareCountDown = () => {
      if ( prepare > 0 && prepare < 4){
        audioBeep.play();
      }
      if (prepare === 0) {
        setFlow('work');
        workCountDown();
      } else {
        const interval = setTimeout(() => {
          setPrepare(prepare - 1);
        }, 1000);
        setTimer(interval);
      }
    };
    // In this first approach, the work calls the rest when it ends
    const workCountDown = () => {
      if (work === workInit){
        audioGo.play();
      } else if ( work > 0 && work < 4){
        audioBeep.play();
      }
      if (work === 0) {
        if (cycles === 1 && tabatas === 1) {
          audioVictory.play()
          setPrepare(prepareInit);
          setWork(workInit);
          setRest(restInit);
          setCycles(cyclesInit);
          setTabatas(tabatasInit);
          setFlow('prepare');
          setGeneralMode(false);
        } else {
          setFlow('rest')
          restCountDown();
        }
        } else {
        const interval = setTimeout(() => {
          setWork(work - 1);
        }, 1000);
        setTimer(interval);
      }
    };

    // In this first approach, the work calls the rest when it ends
    const restCountDown = () => {
        if (rest === restInit){
          audioRest.play();
        } else if ( rest > 0 && rest < 4){
          audioBeep.play();
        }
        if (rest === 0) {
        setFlow('work');
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
        const interval = setTimeout(() => {
          setRest(rest - 1);
        }, 1000);
        setTimer(interval);
      }
    };

    // This triggers the full cycle prepare-work-rest
    if (generalMode && !pauseMode) {
      prepareCountDown();
    } 

  }, [generalMode, prepare, work, rest, pauseMode, cycles, tabatas, workInit, restInit, cyclesInit, prepareInit, tabatasInit, audioBeep, audioGo, audioRest, audioVictory]);


  /**
   * States and handlers to be provided by the Context
   */

  return (
    <FreeTabataContext.Provider
      value={{
        prepare,
        work,
        rest,
        tabatas,
        cycles,
        generalMode,
        handleStartStop,
        pauseMode,
        handleStartPause,
        timer,
        prepareInit,
        handleSetprepare,
        workInit,
        handleSetwork,
        restInit,
        handleSetrest,
        tabatasInit,
        handleSettabatas,
        cyclesInit,
        handleSetcycles,
        flow
      }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
