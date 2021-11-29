import { hasBasePath } from "next/dist/shared/lib/router/router"
import { getDisplayName } from "next/dist/shared/lib/utils"

function Page({ data }) {
    // Render data...
    return <div>My api result: {data.businesses[1].name}</div>
  }

  
  // This gets called on every request
  export async function getServerSideProps(context) {
    var headerThenValue = new Array(2)  
    
    headerThenValue[0] = "Authorization"
    headerThenValue[1] = "Bearer ItVIBAFPY_ZIHXt3o19nS6DZX6hoM--GcxTinvk-c7c_8sYpAWSrYDmLKCPqlbjSMxDRdGCxezq83eqSZbw46T_ffYm877Yb_CVbToSL4JtA8-P1D0KJknFFXQCTYXYx"
    var hvArray = new Array(1)
    hvArray[0] = headerThenValue
    
    
    // Fetch data from external API
    const res = await fetch(`https://api.yelp.com/v3/businesses/search?location=NYC`, {
        
    headers: hvArray

    })
    var data = await res.json()
    
    // Pass data to the page via props
    return { props: {data} }
  }
  
  export default Page