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
  
  var myGrid = <p>My placeholder hahahahahaha</p>
    //search bar input
  var [input, setData] = useState("null")
  //api data
  var [apiName, setName] = useState()
  var [imgUri, setImage] = useState()
  var [rating, setRating] = useState()
  var [url, setUrl] = useState()
  var [apiName2, setName2] = useState()
  var [imgUri2, setImage2] = useState()
  var [rating2, setRating2] = useState()
  var [url2, setUrl2] = useState()
  var [apiName3, setName3] = useState()
  var [imgUri3, setImage3] = useState()
  var [rating3, setRating3] = useState()
  var [url3, setUrl3] = useState()
  var [apiName4, setName4] = useState()
  var [imgUri4, setImage4] = useState()
  var [rating4, setRating4] = useState()
  var [url4, setUrl4] = useState()
  var [apiName5, setName5] = useState()
  var [imgUri5, setImage5] = useState()
  var [rating5, setRating5] = useState()
  var [url5, setUrl5] = useState()
  var [apiName6, setName6] = useState()
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

      <form align="center" onSubmit={submitHandler}>
      <input type="text" placeholder="Type city" className="searchText" onChange={inputChange}/>
      <button><i className="fa fa-search"></i></button>
      </form>
      <div>
        <h2 align="center">Results</h2>
        <div style={{visibility: divStyle ? 'visible' : 'hidden'}} align="center" className="grid">
              <a href={url} className="card">
                <h3>{apiName}</h3>
                <img src={imgUri} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating}</p>
              </a>
    
              <a href={url2} className="card">
              <h3>{apiName2}</h3>
                <img src={imgUri2} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating2}</p>
              </a>
    
              <a
                href={url3}
                className="card"
              >
                <h3>{apiName3}</h3>
                <img src={imgUri3} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating3}</p>
              </a>
    
              <a
                href={url4}
                className="card"
              >
                <h3>{apiName4}</h3>
                <img src={imgUri4} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating4}</p>
              </a>

              <a href={url5} className="card">
                <h3>{apiName5}</h3>
                <img src={imgUri5} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating5}</p>
              </a>
    
              <a href={url6} className="card">
              <h3>{apiName6}</h3>
                <img src={imgUri6} alt="Loading..." width="200" height="200"/>
                <p>Rating: {rating6}</p>
              </a>
              <p align="center">Enjoy!</p>
            </div>
      </div>
    </>
  );
}
 
export default Search;