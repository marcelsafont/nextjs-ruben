"use client";
import styles from './DetailProject.module.css';
export default function DetailProject({ data }) {
  const redirectBackHandler = () => {
    window.history.back();
  };
  return (
    <div className={styles.FullImage} onClick={redirectBackHandler}>
      <div className={styles.FullImage}>
        <div className={styles.Close}>
          <img src="/assets/images/close.svg" alt="" />
        </div>
        <img alt={data.titol} src={data.imatge.url} />
        <div className={styles.Title}>{data.titol}</div>
        {/* The visible title above is not a heading for crawlers; this H1 keeps
            the page's subject machine-readable without changing the design. */}
        <h1 className={styles.VisuallyHidden}>{data.titol}</h1>
      </div>
    </div>
  );
}
