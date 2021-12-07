import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Mediator | Home</title>
        <meta name="keywords" content="mediator"/>
      </Head>
      
      <div>
        <h1 className={styles.title}>Login</h1>
        <p align="center"><input type="text" placeholder="UserName"></input></p>
        <p align="center"><input type="text" placeholder="Password"></input></p>
        <p align="center"><button align="right">Sign In</button></p>
        <p align="center">New User? Create new account</p>
        
        
      </div>
    </>
  )
}
