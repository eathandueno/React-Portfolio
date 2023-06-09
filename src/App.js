import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import FadeInOnScroll from './components/Home/Fade-in';
import Nature from './components/Nature/Nature';
import RealEstate from './components/RealEstate/RealEstate';
import Urban from './components/Urban/Urban';
import Equipment from './components/Equipment/Equipment';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav2.0';
const App = () => {
  const sectionRefs = {
    Home: useRef(null),
    Nature: useRef(null),
    RealEstate: useRef(null),
    Urban: useRef(null),
    Equipment: useRef(null),
  };

  const handleClick = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        
        <Nav handleClick={handleClick} />
        <Home ref={sectionRefs.Home} />
        <FadeInOnScroll ref={sectionRefs.Nature} children={<Nature />} />
        <FadeInOnScroll ref={sectionRefs.RealEstate} children={<RealEstate />} />
        <FadeInOnScroll ref={sectionRefs.Urban} children={<Urban />} />
        <FadeInOnScroll ref={sectionRefs.Equipment} children={<Equipment />} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

