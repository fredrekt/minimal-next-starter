import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({page, children}) => {
    const appname = process.env.NEXT_PUBLIC_APP_NAME
    return (
        <>
        <Head>
            <title>{page ? `${page} | ${appname}`: appname}</title>
        </Head>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout
