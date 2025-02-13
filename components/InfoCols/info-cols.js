import styles from './infoCols.module.css';
export default function InfoCols({ data }){
    const columnes = data.info.columnes;
    return (
        <div className={styles.Home}>
            <div className="container">
            {

                columnes.map((item, index) => {
                    return (
                        <div dangerouslySetInnerHTML={{__html: item.text}} key={index}/>

                    )
                })
            }
            </div>
        </div>
    )
}