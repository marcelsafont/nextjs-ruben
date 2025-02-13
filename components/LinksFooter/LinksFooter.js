import React from 'react'; 
import classes from './LinksFooter.module.css';
const LinksFooter = () => {
  return(
      <div className={classes.Footer}>
          <div className="items">
            <a href="https://www.instagram.com/barbero_tattoo/"><img alt="instagram" src="/assets/images/icono-instagram.svg" /></a>
            <a href="https://wa.me/34644103409"><img alt="whatsapp" src="/assets/images/icono-whatsapp.svg" /></a>
          </div>
      </div>
  );
}; 
export default LinksFooter;
