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

  const [prepare, setPrepare] = useState(10);
  const [work, setWork] = useState(20);
  const [rest] = useState(10);
  const [tabatas] = useState(1);
  const [cycles] = useState(8);
  const [generalMode, setGeneralMode] = useState(false); // it could be stopped (false), on-going (true)
  const [timer, setTimer] = useState();

  const handleStartStop = () => {
    setGeneralMode(!generalMode);
  };

  const prepareCountDown = () => {
    if (prepare === 0) {
      console.log("End of the countdown");
      workCountDown();
    } else {
      const interval = setTimeout(() => {
        setPrepare(prepare - 1);
        console.log(prepare - 1);
      }, 1000);
      setTimer(interval);
    }
  };

  const workCountDown = () => {
    if (work === 0) {
      console.log("End of the countdown");
    } else {
      const interval = setTimeout(() => {
        setWork(work - 1);
        console.log(work - 1);
      }, 1000);
      setTimer(interval);
    }
  }

  useEffect(() => {
    generalMode ? prepareCountDown() : clearTimeout(timer);
  }, [generalMode, prepare]);


  useEffect(() => {
    !prepare && generalMode ? workCountDown() : clearTimeout(timer);
  }, [generalMode, work]);


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
      }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
