'use client'
import classes from './Home.module.css';
import HeaderHome from '../HeaderHome/header-home';

export default function Home({ data }){

        //const imagePath = process.env.REACT_APP_TEST_VAR === 'dev' ? Constants.dev.imagesURL: Constants.prod.imagesURL;
        return(
            <>
                <HeaderHome />
                <div className={classes.Home}>
                    <div className="container">
                        <div className={classes.ImageHome}>
                        <picture>
                            <source 
                                media="(min-width: 768px)" srcSet={data.home.imatge.url} 
                            />
                            <source 
                                media="(max-width: 768px)" srcSet={data.home.imatge.url} 
                            />
                            <img 
                                src={data.home.imatge.url}
                                alt="home"
                            />
                            </picture>
                           
                        </div> 
                        <div className={classes.Icons}>
                            <div><a href="https://www.instagram.com/barbero_tattoo/"><img src="/assets/images/icono-instagram-black.svg" /></a> </div>
                            <div><a href="https://wa.me/34644103409">< img src="/assets/images/icono-whatsapp-black.svg" /></a></div>
                            <div><a href="https://www.facebook.com/barberotattoo/"><img src="/assets/images/facebook-icon.svg" /></a> </div>
                            <div><a href="mailto:barberotattoos@gmail.com"><img src="/assets/images/mail-icon.svg" /></a></div>
                        </div>
                    
                    </div>
                    
                </div>
            </>
        );
    
  
}; 
