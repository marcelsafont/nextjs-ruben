'use client'
import Masonry from "react-masonry-css";
import styles from './GridImages.module.css'
import Link from "next/link";
export default function GridImages({ data }){
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
    };
    const images = data.allGaleriaImatges.map(item => {
        return <Link href={'/imagenes/' + item.id} key={item.id}>
            { item.titol }
        </Link>
    })
    return(
        <div className="container">
           <Masonry
           lassName={styles.Masonry}
            breakpointCols={breakpointColumnsObj}
            columnClassName="my-masonry-grid_column">
                {images}
            </Masonry>
        </div>
    )
} 