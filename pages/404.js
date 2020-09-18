import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'

const MissingPage = () => {
    return (
        <Layout page="404">
            <MDBContainer className="py-5 my-5">
                <MDBRow className="align-items-center">
                    <MDBCol md="6" lg="6">
                        <div className="content text-center">
                            <h1 className="display-3">Ooooppsie, page not found</h1>
                            <p className="lead">Sorry for the inconvenience. We're not able to find what you
                                were looking for.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <img src="/assets/images/missing.png" alt="" className="w-100"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default MissingPage
