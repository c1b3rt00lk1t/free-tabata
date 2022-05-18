import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FreeTabataProvider } from "./context/FreeTabataContext";
import Cycles from "./pages/Cycles";
import Main from "./pages/Main";
import Ongoing from "./pages/Ongoing";
import Prepare from "./pages/Prepare";
import Rest from "./pages/Rest";
import Tabatas from "./pages/Tabatas";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  return (
    <FreeTabataProvider>
      <Router>
        <div className={"verticalContainer margintop-5vh"}>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/prepare" element={<Prepare />}></Route>
            <Route exact path="/work" element={<Work />}></Route>
            <Route exact path="/rest" element={<Rest />}></Route>
            <Route exact path="/cycles" element={<Cycles />}></Route>
            <Route exact path="/tabatas" element={<Tabatas />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/ongoing" element={<Ongoing />}></Route>
          </Routes>
        </div>
      </Router>
    </FreeTabataProvider>
  );
}

export default App;
