import Head from 'next/head'
import Link from 'next/link'

export default function CommentSubmitted() {
  return (
    <div className="container">
      <Head>
        <title>Comment Submitted</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>
            Comment Submitted. 
        </h1>
        <div>Thank you for your comments. You can see your comment on the comments board. Press the button below to return to the comments board. </div>
        <a href='/commentBoard'>To Comment Board</a>
    </div>
  )
}
