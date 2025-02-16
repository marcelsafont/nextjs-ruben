"use client"
import React from 'react'; 
import Link from 'next/link';
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  return(
      <nav className="Navigation">
          <ul>
              
              <li>
                <Link 
                href="/" className={ pathname == '/' ? 'active' : '' }>Home</Link>
              </li>

              <li>
                <Link 
                href="/about" className={ pathname == '/about' ? 'active' : '' }>+ info</Link>
              </li>
              
              <li>
                <Link 
                href="/galeria" className={ pathname == '/galeria' ? 'active' : '' }>Galeria</Link>
              </li>
              <li>
              <Link href="/eventos" className={ pathname == '/eventos' ? 'active' : '' }>Eventos</Link>
              </li>
              <li>
              <Link href="/faqs" className={ pathname == '/faqs' ? 'active' : '' }>Faqs</Link>
              </li>
             
          </ul>
      </nav>
  );
}; 
export default Nav;