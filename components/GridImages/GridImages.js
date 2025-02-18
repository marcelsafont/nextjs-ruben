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
  const images = data.map(item => {
   
    const slug = `${item.titol.trim().toLowerCase().replace(/\s+/g, "-")}=${item.id}`;
      return <Link href={'/galeria/item/' + slug} key={item.id}>
          <img src={item.imatge.url} width="100%" height="auto"/>
      </Link>
    })
    return(
        <div className="container">
           <Masonry
            className={styles.Masonry}
            breakpointCols={breakpointColumnsObj}
            columnClassName="my-masonry-grid_column">
                {images}
            </Masonry>
        </div>
    )
} 