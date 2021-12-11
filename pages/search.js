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
  console.log("reloaded page *Inside*")
  //A boolean for switching visibility of our api results
  var [divStyle, setDivStyle] = useState(false)
  //MealMediator special choice
  var [specialName, setSpecialName] = useState()
  var [specialImage, setSpecialImage] = useState()
  var [specialRating, setSpecialRating] = useState()
  var [specialUrl, setSpecialUrl] = useState()
  
  //Search bar input
  var [input, setData] = useState("null")
  //Setting the api data
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

  //items used to change index of business array to navigate page results
  //predicting next navigation
  var [item1, setItem1] = useState(0)
  var [item2, setItem2] = useState(1)
  var [item3, setItem3] = useState(2)
  var [item4, setItem4] = useState(3)
  var [item5, setItem5] = useState(4)
  var [item6, setItem6] = useState(5)

  //predicting previous navigation
  var [item1b, setItem1b] = useState(0)
  var [item2b, setItem2b] = useState(1)
  var [item3b, setItem3b] = useState(2)
  var [item4b, setItem4b] = useState(3)
  var [item5b, setItem5b] = useState(4)
  var [item6b, setItem6b] = useState(5)

  //setting boolean variable according to whether previous/next button should be visible, according to result limit
  var [nextVisible, setNextVisibility] = useState(false)
  var [prevVisible, setPrevVisibility] = useState(false)

  var [typed, setTyped] = useState(false)
  //Gets called every time there is a change when we type in the search bar, saves each character.
  function inputChange(val) {
    setData(val.target.value)
    setTyped(true)
    totalInput = input;

    setItem1(0)
    setItem2(1)
    setItem3(2)
    setItem4(3)
    setItem5(4)
    setItem6(5)
  }

  function nextResults(event) {
    event.preventDefault();
    scroll(0,0)
    const nextSix = 6
    console.log("Next RES Item 1: " + item1)
    submitHandler(event, nextSix)
  }

  function previousResults(event) {
    event.preventDefault();
    scroll(0,0)
    const prevSix = -6
    console.log("Prev RES Item 1: " + item1)
    submitHandlerB(event, prevSix)
  }

  //Method responding to the search button, gets the api data
  async function submitHandler(event, plusSix = 6) {
    event.preventDefault();
    console.log("PLUS: " + plusSix + ", setItem1 = " + (item1 + plusSix))

    //To set previous button invisible after pressing search button only after having typed something in search bar
    if(typed) {
      setPrevVisibility(false)
      setTyped(false)
    }
  
//predicting a next navigation
    setItem1(item1 + plusSix)
    setItem2(item2 + plusSix)
    setItem3(item3 + plusSix)
    setItem4(item4 + plusSix)
    setItem5(item5 + plusSix)
    setItem6(item6 + plusSix)
//predicting a previous navigation
    setItem1b(item1 - plusSix)
    setItem2b(item2 - plusSix)
    setItem3b(item3 - plusSix)
    setItem4b(item4 - plusSix)
    setItem5b(item5 - plusSix)
    setItem6b(item6 - plusSix)

    totalInput = input;
    console.log("Input: " + input)
    fetcher(input).then(data => {
      console.log("Fetcher for business 1 result : " +  data.businesses[0].name + ", Number of businesses: " + data.businesses.length)
      if((item1 + 6) >= 12) {
        setPrevVisibility(true)
      }
      if((item1 + 6 + 6) > data.businesses.length) {
        setNextVisibility(false)
      }
      else {
        setNextVisibility(true)
      }
      setName(data.businesses[item1].name)
      setImage(data.businesses[item1].image_url)
      setRating(data.businesses[item1].rating)
      setUrl(data.businesses[item1].url)
      setName2(data.businesses[item2].name)
      setImage2(data.businesses[item2].image_url)
      setRating2(data.businesses[item2].rating)
      setUrl2(data.businesses[item2].url)
      setName3(data.businesses[item3].name)
      setImage3(data.businesses[item3].image_url)
      setRating3(data.businesses[item3].rating)
      setUrl3(data.businesses[item3].url)
      setName4(data.businesses[item4].name)
      setImage4(data.businesses[item4].image_url)
      setRating4(data.businesses[item4].rating)
      setUrl4(data.businesses[item4].url)
      setName5(data.businesses[item5].name)
      setImage5(data.businesses[item5].image_url)
      setRating5(data.businesses[item5].rating)
      setUrl5(data.businesses[item5].url)
      setName6(data.businesses[item6].name)
      setImage6(data.businesses[item6].image_url)
      setRating6(data.businesses[item6].rating)
      setUrl6(data.businesses[item6].url)

      //Setting special MealMediator Choice
      var randomNum = Math.floor( Math.random() * (6))
      console.log("Random num: " + randomNum)
      switch (randomNum) {
        case 0:
          setSpecialName(data.businesses[item1].name);
          setSpecialImage(data.businesses[item1].image_url);
          setSpecialRating(data.businesses[item1].rating);
          setSpecialUrl(data.businesses[item1].url);
          console.log("entered case: " + 0)
          break;
        case 1:
          setSpecialName(data.businesses[item2].name);
          setSpecialImage(data.businesses[item2].image_url);
          setSpecialRating(data.businesses[item2].rating);
          setSpecialUrl(data.businesses[item2].url);
          console.log("entered case: " + 1)
          break;
        case 2:
          setSpecialName(data.businesses[item3].name);
          setSpecialImage(data.businesses[item3].image_url);
          setSpecialRating(data.businesses[item3].rating);
          setSpecialUrl(data.businesses[item3].url);
          console.log("entered case: " + 2)
          break;
        case 3:
          setSpecialName(data.businesses[item4].name);
          setSpecialImage(data.businesses[item4].image_url);
          setSpecialRating(data.businesses[item4].rating);
          setSpecialUrl(data.businesses[item4].url);
          console.log("entered case: " + 3)
          break;
        case 4:
          setSpecialName(data.businesses[item5].name);
          setSpecialImage(data.businesses[item5].image_url);
          setSpecialRating(data.businesses[item5].rating);
          setSpecialUrl(data.businesses[item5].url);
          console.log("entered case: " + 4)
          break;
        case 5:
          setSpecialName(data.businesses[item6].name);
          setSpecialImage(data.businesses[item6].image_url);
          setSpecialRating(data.businesses[item6].rating);
          setSpecialUrl(data.businesses[item6].url);
          console.log("entered case: " + 5)
          break;
        default:
          console.log(`Nothin to choose`);
      }
      setDivStyle(true)
    })
  }

  async function submitHandlerB(event) {
    event.preventDefault();
    const minusSix = -6
    console.log("MINUS: " + minusSix + ", setItem1 = " + (item1 - 6))
//predicting a previous navigation
    setItem1b(item1b - 6)
    setItem2b(item2b - 6)
    setItem3b(item3b - 6)
    setItem4b(item4b - 6)
    setItem5b(item5b - 6)
    setItem6b(item6b - 6)
//predicting a next navigation
    setItem1(item1b + 6)
    setItem2(item2b + 6)
    setItem3(item3b + 6)
    setItem4(item4b + 6)
    setItem5(item5b + 6)
    setItem6(item6b + 6)

    totalInput = input;
    console.log("Input: " + input)
    fetcher(input).then(data => {
      console.log("Fetcher for business 1 result : " +  data.businesses[0].name + ", Number of businesses: " + data.businesses.length)
      if((item1) <= data.businesses.length) {
        setNextVisibility(true)
      }
      if((item1 - 6 - 6) <= 0) {
        setPrevVisibility(false)
      }
      else {
        setPrevVisibility(true)
      }
      setName(data.businesses[item1b].name)
      setImage(data.businesses[item1b].image_url)
      setRating(data.businesses[item1b].rating)
      setUrl(data.businesses[item1b].url)
      setName2(data.businesses[item2b].name)
      setImage2(data.businesses[item2b].image_url)
      setRating2(data.businesses[item2b].rating)
      setUrl2(data.businesses[item2b].url)
      setName3(data.businesses[item3b].name)
      setImage3(data.businesses[item3b].image_url)
      setRating3(data.businesses[item3b].rating)
      setUrl3(data.businesses[item3b].url)
      setName4(data.businesses[item4b].name)
      setImage4(data.businesses[item4b].image_url)
      setRating4(data.businesses[item4b].rating)
      setUrl4(data.businesses[item4b].url)
      setName5(data.businesses[item5b].name)
      setImage5(data.businesses[item5b].image_url)
      setRating5(data.businesses[item5b].rating)
      setUrl5(data.businesses[item5b].url)
      setName6(data.businesses[item6b].name)
      setImage6(data.businesses[item6b].image_url)
      setRating6(data.businesses[item6b].rating)
      setUrl6(data.businesses[item6b].url)

      //Setting special MealMediator Choice
      var randomNum = Math.floor( Math.random() * (6))
      console.log("Random num: " + randomNum)
      switch (randomNum) {
        case 0:
          setSpecialName(data.businesses[item1b].name);
          setSpecialImage(data.businesses[item1b].image_url);
          setSpecialRating(data.businesses[item1b].rating);
          setSpecialUrl(data.businesses[item1b].url);
          console.log("entered case: " + 0)
          break;
        case 1:
          setSpecialName(data.businesses[item2b].name);
          setSpecialImage(data.businesses[item2b].image_url);
          setSpecialRating(data.businesses[item2b].rating);
          setSpecialUrl(data.businesses[item2b].url);
          console.log("entered case: " + 1)
          break;
        case 2:
          setSpecialName(data.businesses[item3b].name);
          setSpecialImage(data.businesses[item3b].image_url);
          setSpecialRating(data.businesses[item3b].rating);
          setSpecialUrl(data.businesses[item3b].url);
          console.log("entered case: " + 2)
          break;
        case 3:
          setSpecialName(data.businesses[item4b].name);
          setSpecialImage(data.businesses[item4b].image_url);
          setSpecialRating(data.businesses[item4b].rating);
          setSpecialUrl(data.businesses[item4b].url);
          console.log("entered case: " + 3)
          break;
        case 4:
          setSpecialName(data.businesses[item5b].name);
          setSpecialImage(data.businesses[item5b].image_url);
          setSpecialRating(data.businesses[item5b].rating);
          setSpecialUrl(data.businesses[item5b].url);
          console.log("entered case: " + 4)
          break;
        case 5:
          setSpecialName(data.businesses[item6b].name);
          setSpecialImage(data.businesses[item6b].image_url);
          setSpecialRating(data.businesses[item6b].rating);
          setSpecialUrl(data.businesses[item6b].url);
          console.log("entered case: " + 5)
          break;
        default:
          console.log(`Nothin to choose`);
      }
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
      <h1>Search</h1>
      <form align="center" onSubmit={submitHandler} className="searchForm">
      <input type="text" placeholder="🏙 Type city" className="searchText" onChange={inputChange}/>
      <button className="searchButton"><i className="fa fa-search"></i></button>
      </form>
      <div>
        <h2 align="center">Results</h2>

        <div style={{visibility: divStyle ? 'visible' : 'hidden', align: 'center'}}>
        <div className="gridMediator">
              <a href={specialUrl} className="cardM">
                <h3>{specialName}</h3>
                <img src={specialImage} alt="Loading..." width="200" height="200"/>
                <p align="center">Rating: {specialRating} ⭐</p>
                <p align="center">🍽🌮 MealMediator's Pick! 🍱🍽</p>
              </a>
        </div>
        </div>

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
            </div>
            <p align="center" style={{visibility: divStyle ? 'visible' : 'hidden'}}>Enjoy!</p>
            <form align="right" style={{visibility: divStyle ? 'visible' : 'hidden'}} className="navForm">
                <button style={{visibility: prevVisible ? 'visible' : 'hidden'}} onClick={previousResults} className="navButton1">Previous</button>
                <button style={{visibility: nextVisible ? 'visible' : 'hidden'}} onClick={nextResults} className="navButton2">Next</button>
            </form>
      </div>
      </main>

      <style jsx>{`
            a {
              color: inherit;
              text-decoration: none;
            }

            h1 {
              margin-bottom: 40px;
            }

            h2 {
              margin-top: 20px;
            }

            .searchText {
              width: 400px;
              border-radius: 40px;
            }

            .searchForm {
              position: relative;
              clear: both;
            }

            .navForm {
              position: relative;
              clear: both;
            }

            .navButton1 {
              background-color: #7299fc;
              border-color: #7299fc;
              color: white;
              border-radius: 55px;
              right: 24%;
            }

            .navButton2 {
              background-color: #7299fc;
              border-color: #7299fc;
              color: white;
              border-radius: 55px;
              position: absolute;
            }

            .searchButton {
              background-color: #7299fc;
              border-color: #7299fc;
              color: white;
              border-radius: 55px;
              width: 54px;
              position: absolute;
              top: 0%;
              right: 0%;
            }

            main {
              padding: 0;
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