import styles from './infoCols.module.css';
export default function InfoCols({ data }){
    const columnes = data.info.columnes;
    return (
        <div className={styles.Home}>
            <div className="container">
            {

                columnes.map(item => {
                    return (
                        <div dangerouslySetInnerHTML={{__html: item.text}}/>

                    )
                })
            }
            </div>
        </div>
    )
}