'use client'
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo/Logo'
import Nav from '@/components/Nav/Nav'
const Header = (props) => {
  const [menuClass, setMenuClass] = useState('Header');
  useEffect(() => {
    const handleScroll = e => {
      window.scrollY > 10 ? setMenuClass('Header fixed') : setMenuClass('Header normal')
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      // This cleans up the event handler when the component unmounts.
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return(
    <header className={`${menuClass} ${props.customClass}`} >
          <Logo isSmall={true} />
          <Nav />
    </header>
  );
}; 
export default Header;