import React from "react";
import { FreeTabataProvider } from "./context/FreeTabataContext";
import VerticalContainer from "./flexbox/VerticalContainer";
import HorizontalContainer from "./flexbox/HorizontalContainer";
import CountdownButton from "./components/CountdownButton";
import TabataCycleBtn from "./components/TabataCycleButton";
import StartStopButton from "./components/StartStopButton";
import Volume from "./components/Volume";
import About from "./components/About";


function App() {
  return (
    <FreeTabataProvider>
      <VerticalContainer classes={'margintop-5vh'}>
        <VerticalContainer>
                <CountdownButton type={"prepare"} />
                <CountdownButton type={"work"} />
                <CountdownButton type={"rest"} />
        </VerticalContainer>
        <HorizontalContainer>
              <TabataCycleBtn type={"cycles"}/><TabataCycleBtn type={"tabatas"}/>
        </HorizontalContainer>
        <HorizontalContainer>
          <Volume/><About />
           
        </HorizontalContainer>
        <StartStopButton />
      </VerticalContainer>
    </FreeTabataProvider>
  );
}

export default App;

