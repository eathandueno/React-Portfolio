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
        <a href='#Home' onClick={() => handleClick('Home')}><h1>Dominic Dueno</h1></a>
        <a href='#Nature' onClick={() => handleClick('Nature')}>Nature</a>
        <a href='#RealEstate' onClick={() => handleClick('RealEstate')}>Real Estate</a>
        <a href='#Urban' onClick={() => handleClick('Urban')}>Urban</a>
        <a href='#Equipment' onClick={() => handleClick('Equipment')}>Equipment</a>
    </div>
  )
}

export default Nav