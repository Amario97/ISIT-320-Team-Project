import Head from 'next/head'
import Link from 'next/link'

export default function CommentSubmitted() {
  return (
    <div className="container">
      <Head>
        <title>Coupon Added</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>
            Coupon Added To Account
        </h1>
        <div>Your coupon has been added to your account. (For this test, all coupons have the same value and are not linked to any account) </div>
        <a href='/'>Return Home</a>
    </div>
  )
}
