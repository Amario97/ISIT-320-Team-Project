import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href='/addComment'>
            <a className = 'nav-link'>Add comment</a>
          </Link>
    </div>
  )
}
