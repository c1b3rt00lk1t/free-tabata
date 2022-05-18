import { createContext, useState, useEffect } from "react";

const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {
  // const [prepare, setPrepare] = useState(10);
  // const [work, setWork] = useState(20);
  // const [rest, setRest] = useState(10);
  // const [tabatas, setTabatas] = useState(1);
  // const [cycles, setCycles] = useState(8);
  // const [generalMode, setGeneralMode] = useState(0); // it could be stopped (0), on-going (1), paused (2)
  // const [cycleMode, setCycleMode] = useState("none"); // it could be none, prepare, work, rest

  const [prepare, setPrepare] = useState(5);
  const [work, setWork] = useState(5);
  const [rest, setRest] = useState(5);
  const [tabatas] = useState(1);
  const [cycles] = useState(8);
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [pauseMode, setPauseMode] = useState(false); // it could be paused (false), on-going (true)
  const [timer, setTimer] = useState();

  const handleStartStop = () => {
    // When the Start/Stop button is clicked and the current mode is working, it stops the timer and resets
    if(generalMode){
      clearTimeout(timer);
      setPrepare(5);
      setWork(5);
      setRest(5);
      setPauseMode(false);
   }
   // In any case, the mode is toggled
   setGeneralMode(!generalMode);
  };

  const handleStartPause = () => {
    // When the Start/Pause button is clicked and the current mode is working, it stops the timer but does not reset
    if(generalMode && pauseMode){
      clearTimeout(timer);
   }
   // If the generalMode is active, the pause mode is toggled
   generalMode && setPauseMode(!pauseMode);
  };

  useEffect(() => {
    // In this first approach, the prepare calls the work when it ends
    const prepareCountDown = () => {
      if (prepare === 0) {
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
      if (work === 0) {
        restCountDown();
      } else {
        const interval = setTimeout(() => {
          setWork(work - 1);
        }, 1000);
        setTimer(interval);
      }
    };

    // In this first approach, the work calls the rest when it ends 
    const restCountDown = () => {
      if (rest === 0) {
        setWork(5);
        setRest(5);
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
  }, [generalMode, prepare, work, rest, pauseMode]);


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
      }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
