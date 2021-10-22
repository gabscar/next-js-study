import { Fragment } from 'react';

import { getEventById, getFeaturedEvents } from '../../services/api';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';


function EventDetailPage(props) {
    const event = props.event;
  
    if (!event) {
      return (
        <div className="center">
          <p>Loading...</p>
        </div>
      );
    }
  
    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
  

export  async function getStaticProps(context){
    const {params} = context;
    const eventId = params.eventId;

    const getEvent = await getEventById(eventId)
    if(!getEvent){
        return{notFound:true}
    }
    return{
        props:{
            event: getEvent
        },
        revalidate: 20
    }
}

export async function getStaticPaths(){
    const featuredEvents = await getFeaturedEvents();

    const paths = featuredEvents.map(evt=>({params:{eventId:evt.id}}))

    return{
        paths: paths,
        fallback:'blocking'
    }
}
export default EventDetailPage;