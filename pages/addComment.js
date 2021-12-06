import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from ".prisma/client";
import {Field, Formik, Form} from 'formik'
import { useRouter } from "next/router";

export default function AddComment() {
    const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Add comment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>
            Add Comments
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
        <Formik
            initialValues={{
            Comments: '',
            }}

            onSubmit = {async (values) => {
                await fetch('http://localhost:3000/api/usercomments', {
                    method: 'POST',
                    body: JSON.stringify({...values }),
                });
                router.push('/commentSubmitted');
            }}
        >
            <Form>
                <label>
                Comments
                <Field name="Comments" type="text"></Field>
                </label>
                <button type="submit">Submit</button>
            </Form>   
        </Formik>

    </div>
  )
}


// export async function getServerSideProps() {

//     const prisma = new PrismaClient();
//     const usercomments = await prisma.userComment.findMany();

    

//     // Pass data to the page via props
//     return { props: { usercomments } }
// }
