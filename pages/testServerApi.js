
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef, useState} from "react"
import { useRouter } from 'next/router'


var totalInput = "NY";
console.log("reloaded page")

var headerThenValue = new Array(2)  
    
headerThenValue[0] = "authorization"
headerThenValue[1] = "Bearer ItVIBAFPY_ZIHXt3o19nS6DZX6hoM--GcxTinvk-c7c_8sYpAWSrYDmLKCPqlbjSMxDRdGCxezq83eqSZbw46T_ffYm877Yb_CVbToSL4JtA8-P1D0KJknFFXQCTYXYx"
var hvArray = new Array(1)
hvArray[0] = headerThenValue

    
export async function fetcher(city) {
  const res = await fetch(`https://meal-mediator-app.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}`, {
        
    headers: hvArray

    })
    var dataReturned = await res.json()

    return dataReturned
}

export default function Page() {

  const router = useRouter()
  
  var [input, setData] = useState("null");
  var [apiData, setApiData] = useState()
  var [imgUri, setImage] = useState()
  var [rating, setRating] = useState()

  async function submitHandler(event) {
    event.preventDefault();
    totalInput = input;
    console.log("Input: " + input)
    fetcher(input).then(data => {
      console.log("fetcher result : " +  data.businesses[0].name)
      setApiData(data.businesses[0].name)
      setImage(data.businesses[0].image_url)
      setRating(data.businesses[0].rating)
    })
  }

  function inputChange(val) {
    setData(val.target.value)
    totalInput = input;
  }

    // Render data...
    return (
        <div className="container">
          <div className="topNav">
            <a>Home</a>
            <a>Browse</a>
            <a>Search</a>
            <a>About</a>
          </div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Head>
    
          <main>
            <div className=""></div>
            <h1 className="title">
              Meal Mediator
            </h1>
            

            <form onSubmit={submitHandler}>
            <input type="text" placeholder="Type here" className="searchText" onChange={inputChange}/>
            <button><i className="fa fa-search"></i></button>
            </form>

            <p>My api result: {apiData}</p>
            <p>My search input: {input}</p>
            <Link href="/posts/first-post"><a>Link to post</a></Link>
            <Link href="/testApi"><a>Link to api test page</a></Link>
            <Link href="/testServerApi"><a>Link to api Server test page</a></Link>
    
    
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
    
            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h3>{apiData}</h3>
                <img src={imgUri} alt="Loading..."/>
                <p>Rating: {rating}</p>
              </a>
    
              <a href="https://nextjs.org/learn" className="card">
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
    
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
    
              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </main>
    
          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel" className="logo" />
            </a>
          </footer>
    
          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
    
            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
    
            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            footer img {
              margin-left: 0.5rem;
            }
    
            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            a {
              color: inherit;
              text-decoration: none;
            }
    
            .title a {
              color: #0070f3;
              text-decoration: none;
            }
    
            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }
    
            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }
    
            .title,
            .description {
              text-align: center;
            }
    
            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }
    
            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
    
            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
    
              max-width: 800px;
              margin-top: 3rem;
            }
    
            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
    
            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }
    
            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }
    
            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }
    
            .logo {
              height: 1em;
            }
    
            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>
    
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
    //<div>My api result: {data.businesses[0].name}</div>
    )
  }
  