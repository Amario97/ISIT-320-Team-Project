import Head from 'next/head'

const Browse = () => {
  return (
    <>
      <Head>
        <title>Meal Mediator | Browse</title>
        <meta name="keywords" content="mediator"/>
      </Head>
      
      <div>
        <h1 >Top Catagories</h1>
      </div>

      <div className="grid">
          <a href="" className="card">
            <h3>Fast Food</h3>
            <p></p>
          </a>

          <a href="" className="card">
            <h3>American</h3>
            <p></p>
          </a>

          <a href="" className="card">
            <h3>Indian </h3>
            <p></p>
          </a>

          <a href="" className="card">
            <h3>Mexican </h3>
            <p></p>
          </a>
          <a href="" className="card">
            <h3>Thai </h3>
            <p></p>
          </a>
          <a href="" className="card">
            <h3>Chinese </h3>
            <p></p>
          </a>
          <a href="" className="card">
            <h3>Italian </h3>
            <p></p>
          </a>
          <a href="" className="card">
            <h3>Mediterranean </h3>
            <p></p>
          </a>
        </div>
      
    </>
  );
}
 
export default Browse;