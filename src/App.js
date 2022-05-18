import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { FreeTabataProvider } from "./context/FreeTabataContext";
import CountdownButton from "./components/CountdownButton";
import TabataCycleBtn from "./components/TabataCycleButton";
import StartStopButton from "./components/StartStopButton";
import Volume from "./components/Volume";
import About from "./components/About";

function App() {
  return (
    <FreeTabataProvider>
      <Router>
        <div className={"verticalContainer margintop-5vh"}>
          <Routes>          
            <Route exact path='/' element = {
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
                    <About />
                  </div>
                  <StartStopButton />
              </>
            }></Route>
            <Route exact path='/prepare' element = {
              <><div style={{color:'white'}}>Prepare...</div></>
            }></Route>
            <Route exact path='/work' element = {
              <><div style={{color:'white'}}>Work...</div></>
            }></Route>
            <Route exact path='/rest' element = {
              <><div style={{color:'white'}}>Work...</div></>
            }></Route>
            <Route exact path='/cycles' element = {
              <><div style={{color:'white'}}>Cycles...</div></>
            }></Route>
            <Route exact path='/tabatas' element = {
              <><div style={{color:'white'}}>Tabatas...</div></>
            }></Route>
            <Route exact path='/about' element = {
              <><div style={{color:'white'}}>About...</div></>
            }></Route>
            <Route exact path='/ongoing' element = {
              <><div style={{color:'white'}}>Ongoing...</div></>
            }></Route>
          </Routes>  
        </div>
      </Router>
    </FreeTabataProvider>
  );
}

export default App;
