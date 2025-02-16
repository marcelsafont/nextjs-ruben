"use client"
import styles from './DetailProject.module.css'
export default function DetailProject({ data }) {
  const redirectBackHandler = () => {
    window.history.back()
  }
  return (
    <div className={styles.FullImage} onClick={redirectBackHandler}>
        <div className={ styles.FullImage }>
          <div className={ styles.Close }><img src="/assets/images/close.svg" /></div>
          <img alt={ data.titol } src={data.imatge.url} />
          <div className={styles.Title}>{ data.titol }</div>
        </div>
        
      </div> 
  )
}