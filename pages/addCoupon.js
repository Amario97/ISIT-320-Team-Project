import Head from 'next/head'
import Link from 'next/link'
import {Field, Formik, Form} from 'formik'
import { useRouter } from "next/router";

export default function AddComment() {

  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Add Coupon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>
            Add Coupon
        </h1>
        <Formik
            initialValues={{
            CouponCode: '',
            }}
            onSubmit = {async (values) => {
                await fetch('http://localhost:3000/api/developercoupons', {
                    method: 'POST',
                    body: JSON.stringify({...values }),
                });
                router.push('/couponAdded');
            }}
        >
            <Form>
                <label>
                Add Coupon to account (dev)
                <Field name="CouponCode" type="text"></Field>
                </label>
                <button type="submit">Submit</button>
            </Form>   
        </Formik>

    </div>
  )
}