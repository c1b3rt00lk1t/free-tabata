import React from "react";
import { FreeTabataProvider } from "./context/FreeTabataContext";
import CountdownButton from "./components/CountdownButton";
import TabataCycleBtn from "./components/TabataCycleButton";
import StartStopButton from "./components/StartStopButton";
import Volume from "./components/Volume";
import About from "./components/About";

function App() {
  return (
    <FreeTabataProvider>
      <div className={"verticalContainer margintop-5vh"}>
        <div className={"verticalContainer"}>
          <CountdownButton type={"prepare"} />
          <CountdownButton type={"work"} />
          <CountdownButton type={"rest"} />
        </div>
        <div className="horizontalContainer">
          <TabataCycleBtn type={"cycles"} />
          <TabataCycleBtn type={"tabatas"} />
        </div>
        <div className={"horizontalContainer"}>
          <Volume />
          <About />
        </div>
        <StartStopButton />
      </div>
    </FreeTabataProvider>
  );
}

export default App;
