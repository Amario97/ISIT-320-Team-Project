import Layout from '../layouts/Layout'
import '../styles/globals.css'
import '../styles/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.5"></meta>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
