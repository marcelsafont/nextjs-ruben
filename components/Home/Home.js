import classes from './Home.module.css';
import HeaderHome from '../HeaderHome/header-home';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/business';

export default function Home({ data }) {
  const imageUrl = data?.home?.imatge?.url;

  return (
    <>
      <HeaderHome />
      <div className={classes.Home}>
        <div className="container">
          <div className={classes.ImageHome}>
            {imageUrl ? (
              <picture>
                <source media="(min-width: 768px)" srcSet={imageUrl} />
                <source media="(max-width: 768px)" srcSet={imageUrl} />
                <img src={imageUrl} alt="Tatuajes de Barbero Tattoo en Barcelona" />
              </picture>
            ) : null}
          </div>

          <div className={classes.Intro}>
            <h1 className={classes.Title}>Tatuador en Barcelona</h1>
            <p className={classes.Lead}>
              Barbero Tattoo es un tatuador en Barcelona. Diseñamos y
              ejecutamos tatuajes personalizados, con estilo propio y una atención cercana, y
              llevamos el tattoo a toda España en nuestros viajes.
            </p>
            <p className={classes.Text}>
              Trabajamos por cita previa, con el diseño y el precio acordados antes de empezar.
              Consulta la galería para ver los últimos trabajos, revisa las FAQ antes de tu
              primera cita y escríbenos para reservar día y hora.
            </p>

            <div className={classes.Actions}>
              <Link className={classes.CtaPrimary} href="/galeria">
                Ver galería de tatuajes
              </Link>
              <a className={classes.CtaSecondary} href={SOCIAL_LINKS.whatsapp}>
                Pedir cita por WhatsApp
              </a>
            </div>

            <ul className={classes.Services}>
              <li>Tatuajes personalizados</li>
              <li>Barbero y afeitado</li>
              <li>Diseño de tatuaje</li>
              <li>Viajes y Guest tattoo</li>
            </ul>
          </div>

          <div className={classes.Icons}>
            <div>
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram de Barbero Tattoo">
                <img src="/assets/images/icono-instagram-black.svg" alt="" />
              </a>
            </div>
            <div>
              <a href={SOCIAL_LINKS.whatsapp} aria-label="WhatsApp de Barbero Tattoo">
                <img src="/assets/images/icono-whatsapp-black.svg" alt="" />
              </a>
            </div>
            <div>
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook de Barbero Tattoo">
                <img src="/assets/images/facebook-icon.svg" alt="" />
              </a>
            </div>
            <div>
              <a href={SOCIAL_LINKS.email} aria-label="Enviar email a Barbero Tattoo">
                <img src="/assets/images/mail-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
