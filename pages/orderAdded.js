import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';

export default function OrderAdded() {
  const [data, setData]=useState(null);
  const [print, setPrint]=useState(false);

  function getData(val) {
    setData(val.target.value)
    setPrint(false)
  }
  
  return (
    <div className="container">
      <Head>
        <title>Order Added</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
        Thank you for your order. Your order number is: 1337. Please click the link below to return to the home page
    </div>

      <Link href='/'>
        <a className = 'nav-link'>Home</a>
      </Link>


    </div>
  )
}
