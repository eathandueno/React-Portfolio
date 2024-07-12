import React, { useRef } from "react";
import Home from "./components/Home/Home";
import FadeInOnScroll from "./components/Home/Fade-in";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav2.0";
const App = () => {
  const sectionRefs = {
    Home: useRef(null),
    Projects: useRef(null),
    Education: useRef(null),
  };

  const handleClick = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Nav handleClick={handleClick} />
        <Home ref={sectionRefs.Home} />
        <FadeInOnScroll ref={sectionRefs.Projects} children={<Projects />} />
        <FadeInOnScroll ref={sectionRefs.Education} children={<Education />} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
