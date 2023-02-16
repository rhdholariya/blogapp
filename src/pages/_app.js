import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import 'react-quill/dist/quill.snow.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
  </>
  )
}
