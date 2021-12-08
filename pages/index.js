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
<div class="container">
<h1>Welcome to Meal Mediator</h1>
      <div>MealMediator gives users the ability to look up restaurants and choose where they would like to go. It will also allow users to choose multiple restaurants and have the app randomly choose one for them.</div>
      <br></br>
      <h2>Popular Dining Choices</h2>

      <div class="row">
        <div class="column">
          <img src="/images/chinesefood.jpg" alt="Snow" width= {280} height= {200} />
          <span class="caption">Chinese Food</span>
        </div>
        <div class="column">
          <img src="/images/mexicanfood.jpg" alt="Forest" width= {280} height= {200} />
          <span class="caption">Mexican Food</span>
        </div>
        <div class="column">
          <img src="/images/indianfood.jpg" alt="Mountains" width= {280} height= {200} />
          <span class="caption">Indian Food</span>
        </div>
      </div>
</div>



    </>
  )
}
