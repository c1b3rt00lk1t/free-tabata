import React, { useContext } from "react";
import FreeTabataContext from "../context/FreeTabataContext";

const TotalTime = () => {
  const { prepare, work, rest, wait, tabatas, cycles, iterations } =
    useContext(FreeTabataContext);

  const totalSeconds =
    prepare.initial +
    work.initial * cycles.initial * tabatas.initial +
    rest.initial * cycles.initial * tabatas.initial - rest.initial * tabatas.initial + 
    wait.current * (tabatas.initial - 1);

  const remainingSeconds = totalSeconds - iterations;

  return (
    <div style={{ color: "grey" }}>
      Total time:{" "}
      {`${String(Math.floor(remainingSeconds / 60)).padStart(2, "0")}:${String(
        remainingSeconds % 60
      ).padStart(2, "0")}`}
    <div>{iterations}                                              
    </div>
    
    {/* <div>{work.initial * cycles.current * tabatas.current - (work.initial - work.current)  }
    </div><div>{rest.initial * cycles.current * tabatas.current - rest.initial * tabatas.current - (rest.initial - rest.current)   }
    </div><div>{wait.current * (tabatas.current - 1)}
    </div> */}
    </div>
  );
};

export default TotalTime;
