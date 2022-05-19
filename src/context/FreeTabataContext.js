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

  // default values for testing
  const NR_TIME = 2;
  const NR_TBT = 2;

  const [prepare, setPrepare] = useState(NR_TIME);
  const [work, setWork] = useState(NR_TIME);
  const [rest, setRest] = useState(NR_TIME);
  const [tabatas, setTabatas] = useState(NR_TBT);
  const [cycles, setCycles] = useState(NR_TBT);
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [pauseMode, setPauseMode] = useState(false); // it could be paused (false), on-going (true)
  const [timer, setTimer] = useState();

  const handleStartStop = () => {
    // When the Start/Stop button is clicked and the current mode is working, it stops the timer and resets
    if (generalMode) {
      clearTimeout(timer);
      setPrepare(NR_TIME);
      setWork(NR_TIME);
      setRest(NR_TIME);
      setCycles(NR_TBT);
      setTabatas(NR_TBT);
      setPauseMode(false);
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
        // While there are active cycles, the work-rest timers are reset and the cycle count is decreased
        if (cycles > 1) {
          setWork(NR_TIME);
          setRest(NR_TIME);
          setCycles(cycles - 1);
        } else if (cycles === 1 && tabatas > 1) {
          setCycles(NR_TBT);
          setWork(NR_TIME);
          setRest(NR_TIME);
          setTabatas(tabatas - 1);
        } else if (cycles === 1 && tabatas === 1) {
          setCycles(0);
          setTabatas(0)
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
  }, [generalMode, prepare, work, rest, pauseMode, cycles, tabatas]);

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
