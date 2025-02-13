import classes from './home.module.scss';

export default function Home( data ) {
    console.log(data);
    return (
        <div className="container">
            <div className={classes.ImageHome}>
              holaa
            </div>
            {/* <div className={classes.Icons}>
                <div><a href="https://www.instagram.com/barbero_tattoo/"><img src={instagramIcon} /></a> </div>
                <div><a href="https://wa.me/34644103409">< img src={whatsappIcon} /></a></div>
                <div><a href="https://www.facebook.com/barberotattoo/"><img src={facebookIcon} /></a> </div>
                <div><a href="mailto:barberotattoos@gmail.com"><img src={mailIcon} /></a></div>
            </div> */}

        </div>
    )
}