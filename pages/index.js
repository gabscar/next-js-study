import { useEffect, useState } from 'react';
import path from 'path'
import { getFeaturedEvents } from '../services/api';
import useSWR from 'swr';
import EventList from '../components/events/event-list';

function HomePage(props) {
  
  
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(){
  const events = await getFeaturedEvents()
  

  return {props:{events: events}, revalidate: 50}
}