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
    const [invalidCoupon, setInvalidCoupon]=useState(false);

    let couponActivatedTest = false;

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
            setPrint(true)
            setInvalidCoupon(false)
            couponActivatedTest = true;
            calculateSubtotal(carrot, banana, cucumber);
        } else {
            setInvalidCoupon(true);
        }
    }

    function calculateSubtotal(carrot, banana, cucumber) {
        let newPrice = carrot + banana + cucumber
        if (couponActivatedTest) {
            newPrice = newPrice * 0.75
        }
        console.log(newPrice)
        setPrice(newPrice);
    }

    return (
        <div className="container">
            <Head>
                <title>Make order</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="row">
                    <h1>
                        Make Order
                    </h1>
                </div>
                <div className="row">
                    <label>Choose a Restaurant:</label>
                    <select>
                        <option>Place 1</option>
                        <option>Place 2</option>
                        <option>Place 3</option>
                        <option>Place 4</option>
                    </select>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <label htmlFor="carrotCount">Carrot</label>
                        <input type="number" id="carrotCount" onChange={getCarrot} min="0"/>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="bananaCount">Banana</label>
                        <input type="number" id="bananaCount" onChange={getBanana} min="0"/>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="cucumberCount">Cucumber</label>
                        <input type="number" id="cucumberCount"  onChange={getCucumber} min="0"/>
                    </div>
                </div>
                <br />

                <div className="row">
                    <button onClick = {() => { calculateSubtotal(carrot, banana, cucumber)}}>Calculate Subtotal</button>
                </div>
                <br />
                <div className="row">
                    {
                        print?
                        <h1>Coupon Activated</h1>
                        :
                        <div>
                            <label htmlFor="couponBox">Coupon</label>
                            <input type="text" id="couponBox" onChange={getData} />
                            <button onClick = {() => {checkCoupon(data);} }>Add Coupon</button>
                            {
                                invalidCoupon?
                                <div>Invalid Coupon Found</div>:
                                null
                            }
                        </div>
                    }
                </div>
                <br />
                <div className="row">
                    <div>
                        Total Price: {price}
                    </div>
                </div>
                <br />
                <div className="row">
                    {
                    price > 0?
                    <button onClick={() => {router.push('/orderAdded')}}>Submit</button>
                    :null
                    }
                </div>
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