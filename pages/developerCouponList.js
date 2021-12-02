import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react';

let couponArray = new Array();

export default function DeveloperCouponList( {coupons} ) {

    const [data, setData]=useState(null);
    const [print, setPrint]=useState(false);
    const [price, setPrice]=useState(500);

    let couponActivated = false;
    

    function getData(val) {
        setData(val.target.value)
      }

    coupons.map((coupon) => (
        couponArray.push(coupon.CouponCode)
    ))

    
    function checkCoupon(testCoupon) {
        if (couponArray.includes(testCoupon)) {
            console.log("Coupon Found")
            setPrint(true)
            couponActivated = true;
            setPrice(price * 0.75)
        } else {
            console.log("Coupon not found")
        }
    }

    return (
    <div className="container">
      <Head>
        <title>Comment Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
            Coupon Experiment
        </h1>

        {
            print?
            <h1>Coupon Activated</h1>
            :
            <div className='col-sm-3'>
            <input type="text" onChange={getData} />
            <button onClick = {() => {setPrint(true); checkCoupon(data); console.log(couponActivated)} }>Print Stuff</button>
            </div>
        }
        <div>
            {price}
        </div>

    </div>
  )
}

export async function getServerSideProps() {

    const prisma = new PrismaClient();

    const coupons = await prisma.developerCoupons.findMany();


    // Pass data to the page via props
    return { props: { coupons } }
}