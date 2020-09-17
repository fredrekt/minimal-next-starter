import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'

const MissingPage = () => {
    return (
        <Layout page="Page not Found">
            <MDBContainer>
                <h1 className="h1-responsive">Missing Page</h1>
            </MDBContainer>
        </Layout>
    )
}

export default MissingPage
