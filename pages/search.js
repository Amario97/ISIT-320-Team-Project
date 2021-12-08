import Head from 'next/head'
import React, {useRef, useState} from "react"

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

const Search = () => {
  var [divStyle, setDivStyle] = useState(false)
  
  
    //search bar input
  var [input, setData] = useState("null")
  //api data
  var [name, setName] = useState()
  var [imgUri, setImage] = useState()
  var [rating, setRating] = useState()
  var [url, setUrl] = useState()
  var [name2, setName2] = useState()
  var [imgUri2, setImage2] = useState()
  var [rating2, setRating2] = useState()
  var [url2, setUrl2] = useState()
  var [name3, setName3] = useState()
  var [imgUri3, setImage3] = useState()
  var [rating3, setRating3] = useState()
  var [url3, setUrl3] = useState()
  var [name4, setName4] = useState()
  var [imgUri4, setImage4] = useState()
  var [rating4, setRating4] = useState()
  var [url4, setUrl4] = useState()
  var [name5, setName5] = useState()
  var [imgUri5, setImage5] = useState()
  var [rating5, setRating5] = useState()
  var [url5, setUrl5] = useState()
  var [name6, setName6] = useState()
  var [imgUri6, setImage6] = useState()
  var [rating6, setRating6] = useState()
  var [url6, setUrl6] = useState()

  function inputChange(val) {
    setData(val.target.value)
    totalInput = input;
  }

  async function submitHandler(event) {
    event.preventDefault();
    totalInput = input;
    console.log("Input: " + input)
    fetcher(input).then(data => {
      console.log("fetcher result : " +  data.businesses[0].name)
      setName(data.businesses[0].name)
      setImage(data.businesses[0].image_url)
      setRating(data.businesses[0].rating)
      setUrl(data.businesses[0].url)
      setName2(data.businesses[1].name)
      setImage2(data.businesses[1].image_url)
      setRating2(data.businesses[1].rating)
      setUrl2(data.businesses[1].url)
      setName3(data.businesses[2].name)
      setImage3(data.businesses[2].image_url)
      setRating3(data.businesses[2].rating)
      setUrl3(data.businesses[2].url)
      setName4(data.businesses[3].name)
      setImage4(data.businesses[3].image_url)
      setRating4(data.businesses[3].rating)
      setUrl4(data.businesses[3].url)
      setName5(data.businesses[4].name)
      setImage5(data.businesses[4].image_url)
      setRating5(data.businesses[4].rating)
      setUrl5(data.businesses[4].url)
      setName6(data.businesses[5].name)
      setImage6(data.businesses[5].image_url)
      setRating6(data.businesses[5].rating)
      setUrl6(data.businesses[5].url)
      setDivStyle(true)
    })
  }

  return (
    <>
      <Head>
        <title>Meal Mediator | Search</title>
        <meta name="keywords" content="mediator"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <main>
      <form align="center" onSubmit={submitHandler}>
      <input type="text" placeholder="Type city" className="searchText" onChange={inputChange}/>
      <button className="searchButton"><i className="fa fa-search"></i></button>
      </form>
      <div>
        <h2 align="center">Results</h2>
        <div style={{visibility: divStyle ? 'visible' : 'hidden', align: 'center'}} className="gridMediator">
              <a href={url} className="cardM">
                <h3>{name}</h3>
                <img src={imgUri} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating} ⭐</p>
              </a>
    
              <a href={url2} className="cardM">
              <h3>{name2}</h3>
                <img src={imgUri2} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating2} ⭐</p>
              </a>
    
              <a
                href={url3}
                className="cardM"
              >
                <h3>{name3}</h3>
                <img src={imgUri3} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating3} ⭐</p>
              </a>
    
              <a
                href={url4}
                className="cardM"
              >
                <h3>{name4}</h3>
                <img src={imgUri4} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating4} ⭐</p>
              </a>

              <a href={url5} className="cardM">
                <h3>{name5}</h3>
                <img src={imgUri5} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating5} ⭐</p>
              </a>
    
              <a href={url6} className="cardM">
                <h3>{name6}</h3>
                <img src={imgUri6} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {rating6} ⭐</p>
              </a>
              <p align="center" id="enjoy">Enjoy!</p>
            </div>
      </div>
      </main>

      <style jsx>{`
            a {
              color: inherit;
              text-decoration: none;
            }

            .searchText {
              border-radius: 40px;
            }

            .searchButton {
              border-radius: 40px;
            }

            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
    
            .gridMediator {
              display: flex;
              align: center;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              
              max-width: 1200px;
              margin-top: 3rem;
            }

            .gridMediator img{
              width: 300px;
              height: 300px;
            }
    
            .cardM {
              margin: 1rem;
              flex-basis: 30%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
    
            .cardM:hover,
            .cardM:focus,
            .cardM:active {
              color: #0070f3;
              border-color: #0070f3;
            }
    
            .cardM h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }
    
            .cardM p {
              align: center;
              font-size: 1.25rem;
              line-height: 1.5;
            }

            #enjoy {
              clear: left;
            }
    
            .logo {
              height: 1em;
            }
    
            @media (max-width: 600px) {
              .gridMediator {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>
    
    </>
  );
}
 
export default Search;