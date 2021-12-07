

function Page({ api }) {
    return <div>My api result: {api}</div>
  }

  Page.getInitialProps = async (ctx) => {
    
    const res = await fetch('https://api.fda.gov/food/enforcement.json?limit=10')
    const json = await res.json()
    

    return { api: json.results[0].country}
  }
  
  export default Page
