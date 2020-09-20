import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    SIZE,
    ROLE
  } from "baseui/modal";
import { StyledLink } from 'baseui/link';

const Layout = ({page, children, desc, img}) => {
    const [show, setShow] = useState(typeof window !== `undefined` && localStorage.getItem('consent') === null && true);
    const appname = process.env.NEXT_PUBLIC_APP_NAME
    const title = page ? `${page} | ${appname}`: appname
    const description = desc ? desc : "sample description here"
    const image = img ? img : ""
    const website = process.env.NEXT_PUBLIC_WEBSITE

    useEffect(() => {
        localStorage.setItem('consent', show)
    }, [show])

    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={website}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={website}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            <meta property="twitter:image" content={image}/>
        </Head>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
        <Modal
            onClose={() => setShow(false)}
            closeable
            isOpen={show}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.dialog}
        >
        <ModalHeader>Cookies Policy</ModalHeader>
        <ModalBody>
        Your privacy is important to us. It is Fredrekt's policy to respect 
        your privacy regarding any information we may collect from you across our website, 
        http://next-minimalist.ga/, and other sites we own and operate. <StyledLink href="/privacypolicy">Read more about the policy.</StyledLink>
        </ModalBody>
        <ModalFooter>
            <ModalButton onClick={()=>setShow(false)}>Okay</ModalButton>
        </ModalFooter>
        </Modal>
        </>
    )
}

export default Layout
