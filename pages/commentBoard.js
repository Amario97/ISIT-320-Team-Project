import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from ".prisma/client";

export default function CommentBoard( {usercomments} ) {
  return (
    <div className="container">
      <Head>
        <title>Comment Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div>
            Comment Board goes here
        </div>
        <div className='col-sm-3'>
            <h3>Comments</h3>
            {usercomments.map((usercomment) => (
            <div key={usercomment.id}>
                <h4>{usercomment.Username}: {usercomment.Comments} </h4>
            </div>
            ))}
        </div>

        <a href='/addComment'>Add Comment</a>

    </div>
  )
}

export async function getServerSideProps() {

    const prisma = new PrismaClient();
    const usercomments = await prisma.userComment.findMany();

    

    // Pass data to the page via props
    return { props: { usercomments } }
}

