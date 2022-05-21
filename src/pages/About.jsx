import React from "react";
import DoneButton from "../components/DoneButton";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <h1>
          <b>Tabata Free</b> - 1.0.0
        </h1>
        <h2>
          <b>Offline mode</b>: install this app as a desktop app or a mobile app
          and enjoy the training offline!
        </h2>
        <p>
          On iPhone Safari the sound will not play because of
          this <em>issue</em>: https://developer.apple.com/forums/thread/126342
        </p>
      </div>
      <DoneButton />
      <div className="developed">
        <p>Developed by c1b3rt00lk1t</p>
        <p>github.com/c1b3rt00lk1t/free-tabata/</p>
        
      </div>
    </>
  );
};

export default About;
