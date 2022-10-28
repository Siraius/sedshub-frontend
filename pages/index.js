import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';


export default function Home() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    GetEvents();
  }, [])

  const GetEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events')
      const data = response.data
      setEvents(data.reverse());
      console.log(events);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
