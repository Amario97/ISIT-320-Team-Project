import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

export default function CouponList( {usercoupons} ) {
  return (
    <div className="container">
      <Head>
        <title>Coupon List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
            Coupons
        </h1>
        <div>
            {usercoupons.map((usercoupon) => (
              <div key={usercoupon.id}>
                  <h4>{usercoupon.CouponCode} </h4>
              </div>
            ))}
        </div>


    </div>
  )
}

export async function getServerSideProps() {

    const prisma = new PrismaClient();

    const usercoupons = await prisma.developerCoupons.findMany();


    // Pass data to the page via props
    return { props: { usercoupons } }
}