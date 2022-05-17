import { createContext, useState, useEffect } from "react";

const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {
  const [prepare, setPrepare] = useState(10);
  const [work, setWork] = useState(20);
  const [rest, setRest] = useState(10);
  const [tabatas, setTabatas] = useState(8);
  const [cycles, setCycles] = useState(8);
  const [generalMode, setGeneralMode] = useState("stopped"); // it could be stopped, on-going, paused
  const [cycleMode, setCycleMode] = useState("none"); // it could be none, prepare, work, rest

  return (
    <FreeTabataContext.Provider
      value={{ prepare, work, rest }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
