import React from 'react'; 
import Link from 'next/link';
const Nav = () => {
  return(
      <nav className="Navigation">
          <ul>
              
              <li>
                <Link 
                href="/" exact>Home</Link>
              </li>

              <li>
                <Link 
                href="/about" exact>+ info</Link>
              </li>
              
              <li>
                <Link 
                href="/imagenes">Galeria</Link>
              </li>
              <li>
              <Link href="/eventos">Eventos</Link>
              </li>
              <li>
              <Link href="/faqs">Faqs</Link>
              </li>
             
          </ul>
      </nav>
  );
}; 
export default Nav;