import React from "react";
import "../../fonts/fonts.css";
import backgroundVideo from "./whoIsEathanD.mp4";

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <video autoPlay muted id="bgvideo" className="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
