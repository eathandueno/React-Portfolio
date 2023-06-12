import React, {useEffect, useState} from 'react'
import './nav.css';
import 'bootstrap/dist/css/bootstrap.css';
const Nav = ( {handleClick}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className={`nav-left ${visible ? '' : 'hidden'}`}>
        <a href='#Home' onClick={() => handleClick('Home')}><h4><b>Home</b></h4></a>
        <a href='#Nature' onClick={() => handleClick('Nature')}>nature</a>
        <a href='#RealEstate' onClick={() => handleClick('RealEstate')}>real estate</a>
        <a href='#Urban' onClick={() => handleClick('Urban')}>urban</a>
        <a href='#Equipment' onClick={() => handleClick('Equipment')}>equipment</a>
    </div>
  )
}

export default Nav