import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({page, children, desc, img}) => {
    const appname = process.env.NEXT_PUBLIC_APP_NAME
    const title = page ? `${page} | ${appname}`: appname
    const description = desc ? desc : "sample description here"
    const image = img ? img : ""
    const website = process.env.NEXT_PUBLIC_WEBSITE

    return (
        <>
        <Head>
            <title>{title}</title>
            {/* <!-- Primary Meta Tags --> */}
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={website}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={website}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            <meta property="twitter:image" content={image}/>
        </Head>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout
