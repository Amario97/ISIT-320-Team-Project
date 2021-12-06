import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react';
import { useRouter } from "next/router";
import {Field, Formik, Form} from 'formik'

let couponArray = new Array();

export default function DeveloperCouponList( {coupons} ) {
    const router = useRouter();

    const [data, setData]=useState(null);
    const [print, setPrint]=useState(false);
    const [price, setPrice]=useState(0);
    const [carrot, setCarrot]=useState(0);
    const [banana, setBanana]=useState(0);
    const [cucumber, setCucumber]=useState(0);
    const [couponActivated, setCouponActivated]=useState(false)

    //let couponActivated = false;
    

    function getData(val) {
        setData(val.target.value)
    }
    function getCarrot(val) {
        setCarrot(val.target.value * 5)
        console.log(val)
    }
    function getBanana(val) {
        setBanana(val.target.value * 5)
    }
    function getCucumber(val) {
        setCucumber(val.target.value * 5)
    }

    coupons.map((coupon) => (
        couponArray.push(coupon.CouponCode)
    ))

    
    function checkCoupon(testCoupon) {
        if (couponArray.includes(testCoupon)) {
            console.log("Coupon Found")
            setPrint(true)
            setCouponActivated(true)
            // couponActivated = true;
            setPrice(price * 0.75)
        } else {
            console.log("Coupon not found")
        }
    }

    function calculateSubtotal(carrot, banana, cucumber) {
        let newPrice = carrot + banana + cucumber
        if (couponActivated) {
            newPrice = newPrice * 0.75
        }
        console.log(newPrice)
        setPrice(newPrice);
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
      <br />
        <label>Choose a Restaurant:</label>
        <select>
            <option>Place 1</option>
            <option>Place 2</option>
            <option>Place 3</option>
            <option>Place 4</option>
        </select>
        <br />
        <label htmlFor="carrotCount">Carrot</label>
        <input type="number" id="carrotCount" onChange={getCarrot} min="0"/>
        <br />
        <label htmlFor="bananaCount">Banana</label>
        <input type="number" id="bananaCount" onChange={getBanana} min="0"/>
        <br />
        <label htmlFor="cucumberCount">Cucumber</label>
        <input type="number" id="cucumberCount"  onChange={getCucumber} min="0"/>
        <br />
        <button onClick = {() => {calculateSubtotal(carrot, banana, cucumber)}}>Calculate Subtotal</button>

        {
            print?
            <h1>Coupon Activated</h1>
            :
            <div className='col-sm-3'>

                <label htmlFor="couponBox">Coupon</label>
                <input type="text" id="couponBox" onChange={getData} />
                <button onClick = {() => {setPrint(true); checkCoupon(data); console.log(couponActivated)} }>Add Coupon</button>

                <br />
                <br />
                <br />

            </div>
        }
        <div>
            Total Price: {price}
        </div>
        {
            price > 0?
            <button onClick={() => {router.push('/orderAdded')}}>Submit</button>
            :null
        }
    </div>
  )
}

export async function getServerSideProps() {

    const prisma = new PrismaClient();

    const coupons = await prisma.developerCoupons.findMany();


    // Pass data to the page via props
    return { props: { coupons } }
}