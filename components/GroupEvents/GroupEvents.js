import { list } from 'postcss'
import styles from './GroupEvents.module.css'
export default function GroupEvents({ title, listevents }) {

    return (
      <div className={styles.GridEvents}>
        <h3>{title}</h3>
        <div className={styles.GridBlock}>
        {
            listevents && listevents.map((item, index) => {
              const date = new Date(item.inici);
              const end_date = new Date(item.final);
              const dateFormated = new Intl.DateTimeFormat('en-GB').format(date);
              const endDateFormated = new Intl.DateTimeFormat('en-GB').format(end_date);
            return (
              <div className={styles.Item} key={index}>
                <div className={styles.Image}>
                  { item?.imatge ? <img src={item.imatge.url} />  : '' }
                </div>
                <div className={styles.Info}>
                  <div>
                    { item.titol }
                  </div>
                  <div className={styles.Date}>
                    <span>{ dateFormated }</span> - <span>{ endDateFormated }</span>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>

        </div>
    )
}