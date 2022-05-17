import React from "react";
import { FreeTabataProvider } from "./context/FreeTabataContext";
import VerticalContainer from "./flexbox/VerticalContainer";
import HorizontalContainer from "./flexbox/HorizontalContainer";
import CountdownButton from "./components/CountdownButton";
import TabataCycleBtn from "./components/TabataCycleButton";

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
      </VerticalContainer>
    </FreeTabataProvider>
  );
}

export default App;
