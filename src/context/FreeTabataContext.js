import { createContext, useState } from "react";

const FreeTabataContext = createContext();

export const FreeTabataProvider = ({ children }) => {
  // const [prepare, setPrepare] = useState(10);
  // const [work, setWork] = useState(20);
  // const [rest, setRest] = useState(10);
  // const [tabatas, setTabatas] = useState(1);
  // const [cycles, setCycles] = useState(8);
  // const [generalMode, setGeneralMode] = useState(0); // it could be stopped (0), on-going (1), paused (2)
  // const [cycleMode, setCycleMode] = useState("none"); // it could be none, prepare, work, rest


  const [prepare] = useState(10);
  const [work] = useState(20);
  const [rest] = useState(10);
  const [tabatas] = useState(1);
  const [cycles] = useState(8);
  const [generalMode] = useState(0); // it could be stopped (0), on-going (1), paused (2)



  return (
    <FreeTabataContext.Provider
      value={{ prepare, work, rest, tabatas, cycles,generalMode }}
    >
      {children}
    </FreeTabataContext.Provider>
  );
};

export default FreeTabataContext;
