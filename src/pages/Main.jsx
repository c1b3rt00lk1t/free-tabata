import FreeTabataContext from "../context/FreeTabataContext";
import CountdownButton from "../components/CountdownButton";
import TabataCycleBtn from "../components/TabataCycleButton";
import StartStopButton from "../components/StartStopButton";
import Volume from "../components/Volume";
import AboutButton from "../components/AboutButton";
import PauseButton from "../components/PauseButton";
import { useContext } from "react";
import DisplayCountdown from "../components/DisplayCountdown";

const Main = () => {
  const {generalMode, flow} = useContext(FreeTabataContext);

  return (
    <>
                  <div className={"verticalContainer"}>
                    {!generalMode && <CountdownButton type={"prepare"}/>}
                    {!generalMode && <CountdownButton type={"work"} />}
                    {!generalMode && <CountdownButton type={"rest"} />}
                    {generalMode && <DisplayCountdown type={flow} />}
                  </div>
                  <div className="horizontalContainer">
                    <TabataCycleBtn type={"cycles"} />
                    <TabataCycleBtn type={"tabatas"} />
                  </div>
                  <div className={"horizontalContainer"}>
                    <Volume />
                    <PauseButton/>
                    <AboutButton />
                  </div>
                  <StartStopButton />
    </>
  )
}

export default Main