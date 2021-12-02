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
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        print?
        <h1>{data}</h1>
        :null
      }

      <input type="text" onChange={getData} />
      <button onClick = {() => setPrint(true) }>Print Stuff</button>
      <Link href='/addComment'>
        <a className = 'nav-link'>Add comment</a>
      </Link>
      <Link href='/addCoupon'>
        <a className = 'nav-link'>Add coupon to account</a>
      </Link>
      <Link href='/'>
        <a className = 'nav-link'>Home</a>
      </Link>
      <Link href='/commentBoard'>
        <a className = 'nav-link'>Comments board</a>
      </Link>
      <Link href='/developerCouponList'>
        <a className = 'nav-link'>Make Order</a>
      </Link>

    </div>
  )
}
