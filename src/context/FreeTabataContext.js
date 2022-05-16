import { createContext, useState, useEffect } from "react";

const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {
  const [prepareCountdown, setPrepareCountdown] = useState(10);
  const [workCountdown, setWorkCountdown] = useState(20);
  const [restCountdown, setRestCountdown] = useState(10);
  const [tabatasCountdown, setTabatasCountdown] = useState(8);
  const [cyclesCountdown, setCyclesCountdown] = useState(8);
  const [generalMode, setGeneralMode] = useState("stopped"); // it could be stopped, on-going, paused
  const [cycleMode, setCycleMode] = useState("none"); // it could be none, prepare, work, rest

  return (
    <FreeTabataContext.Provider
      value={{ prepareCountdown, workCountdown, restCountdown }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
