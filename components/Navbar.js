import React, { useState } from 'react'
import Link from 'next/link';
import { MDBContainer, MDBNavbar, MDBNavbarToggler, MDBCollapse, MDBNavbarNav } from 'mdbreact'

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);
    const onClick = () => setCollapse(!collapse);

    return (
        <header>
            <MDBNavbar className="z-depth-0" light expand="md">
                <MDBContainer className="py-3">
                    <Link href="/">
                        <a className="h2-responsive black-text font-weight-bold m-0">{process.env.NEXT_PUBLIC_APP_NAME}</a>
                    </Link>
                    <MDBNavbarToggler onClick={onClick} />
                    <MDBCollapse isOpen={collapse} navbar>
                        <MDBNavbarNav right>
                            <li className="mx-lg-4 mx-md-4">
                                <Link href="/">
                                    <a className="h6-responsive text-uppercase black-text">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="mx-lg-4 mx-md-4">
                                <Link href="/about">
                                    <a className="h6-responsive text-uppercase black-text">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="mx-lg-4 mx-md-4">
                                <Link href="/blog">
                                    <a className="h6-responsive text-uppercase black-text">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="mx-lg-4 mx-md-4">
                                <Link href="/contact">
                                    <a className="h6-responsive text-uppercase black-text">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    )
}

export default Navbar
