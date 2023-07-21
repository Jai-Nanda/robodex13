import '@/styles/globals.css'
import Navbar from './components/Navbar'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
const nunito = Nunito({
  weight: [ '300','400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
})
import localFont from 'next/font/local'
import Footer from './components/Footer'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: 'conthrax-sb.ttf',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return  <><style jsx global>{`
  html {
    min-height: 100vh;
  display: flex;
  flex-direction: column;
    font-family: ${myFont.style.fontFamily};
  }
`}</style><Navbar/> <Component {...pageProps} /> <Footer/> </>
}
