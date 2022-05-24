import React, { useContext } from "react";
import DoneButton from "../components/DoneButton";
import { BsToggleOff, BsToggleOn} from 'react-icons/bs'
import FreeTabataContext from "../context/FreeTabataContext";

const About = () => {
  const {flickerOnOff,setFlickerOnOff} = useContext(FreeTabataContext);

  // const height= getComputedStyle(document.querySelector('h2')).height.replace(/px/i,'')
  const height = window.innerHeight * 0.06;
  return (
    <>
      <div className="aboutContainer">
        <h1>
          Settings
        </h1>
        {flickerOnOff &&<div className='settingsContainer' onClick={() =>setFlickerOnOff(!flickerOnOff) }><BsToggleOn color='blue' size={height} /><h2 className="margin-left">Press to disable flicker  during work.</h2></div>}
        {!flickerOnOff && <div className='settingsContainer'  onClick={() =>setFlickerOnOff(!flickerOnOff) }><BsToggleOff color='blue' size={height} /><h2 className="margin-left">Press to enable flicker during work.</h2></div>}
        <DoneButton />
        <h1>
          <b>Tabata Free</b> - 1.0.0
        </h1>
        <h2>
          <b>Offline mode</b>: install this PWA as a desktop app or a mobile app
          and enjoy the training offline!
        </h2>
        <p>
          On iPhone Safari the sound will not play because of
          this <em>issue</em>: https://developer.apple.com/forums/thread/126342
        </p>
      </div>
      
      <div className="developed">
        <p>Developed by c1b3rt00lk1t</p>
        <p>github.com/c1b3rt00lk1t/free-tabata/</p>
        
      </div>
    </>
  );
};

export default About;
