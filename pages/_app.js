import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress

//styletron imports
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../lib/styletron'

//nprogress config
NProgress.configure({ showSpinner: false })

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <Component {...pageProps} />
      </StyletronProvider>
    )
}

export default MyApp
