import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {
  const [data, setData]=useState(null);
  const [print, setPrint]=useState(false);

  function getData(val) {
    setData(val.target.value)
    setPrint(false)
  }
  
  return (
    <>
      <Head>
        <title>Meal Mediator | Home</title>
        <meta name="keywords" content="mediator"/>
      </Head>

      <div>Add some homepage stuff here</div>

    </>
  )
}
