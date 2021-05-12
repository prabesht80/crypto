import Layout from '../comp/layouts/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
