import React from 'react'; 
import Link from 'next/link';
const Logo = ({isSmall = false}) => {
  return(
      <div>{ isSmall && <p>hola</p>}
          <Link href="/"><span>Barbero</span><img src="/assets/images/logo-blanco.svg" alt="Logo Barbero Tatto" /><span>Tattoo</span></Link>
      </div>
  );
}; 
export default Logo;