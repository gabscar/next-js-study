import EventItem from './event-item';
import style from './event-list.module.css';


function EventList(props){
    const { items } = props;
    return(
        <ul className = {style.list}>
            {items.map((Evt) => (
                <EventItem
                key={Evt.id}
                id={Evt.id}
                title={Evt.title}
                location={Evt.location}
                date={Evt.date}
                image={Evt.image}
                />
            ))}

        </ul>
    )
}

export default EventList;