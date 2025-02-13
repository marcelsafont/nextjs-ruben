import GroupEvents from "../GroupEvents/GroupEvents";
import styles from './GridEvents.module.css'

export default function GridEvents({data}){
    const eventos = data.allEsdeveniments

    const groupBy = (objectArray, property) => {
        return objectArray.reduce(function (total, obj) {
            let key = obj[property].nom;
            if (!total[key]) {
                total[key] = [];
            }
            total[key].push(obj);
            return total;
        }, {});
    }

    let groupedCityFuture = groupBy(eventos, 'ciutat');
    let eventsRender = Object.entries(groupedCityFuture).map(item => {
        return <GroupEvents title={item[0]} listevents={item[1]} key={item[0]}/>
    })
    return (
        <div className="container">
            <h3 className={styles.Title}>Proximos eventos</h3>
            { eventsRender }
        </div>
    )

}
