import CountdownButton from "../components/CountdownButton";
import TabataCycleBtn from "../components/TabataCycleButton";
import StartStopButton from "../components/StartStopButton";
import Volume from "../components/Volume";
import AboutButton from "../components/AboutButton";

const Main = () => {
  return (
    <>
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
                    <AboutButton />
                  </div>
                  <StartStopButton />
    </>
  )
}

export default Main