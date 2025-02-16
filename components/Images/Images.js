import Link from "next/link";
import classes from './images.module.css'
import Image from "next/image";
import { Image as DatoImage, RSCImage as DatoSRCImage } from "react-datocms";
export default function Images({data}){
    const cats = data.allCategoriaImatges;
    return (
        <div className={classes.Filter}>
            <div className="container">
                <div className={classes.Grid}>
                    {
              cats.map(item => {
                            const slug = `${encodeURI(item.titol).toLowerCase()}=${item.id}`;
                            const link = `/categoria/${slug}`
                            return (
                                <Link href={link} key={item.id}>
                                    <h3>{item.titol}</h3>
                                    <Image src={item.imatge.responsiveImage.src} width="400" height="270"/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>   
    )
}