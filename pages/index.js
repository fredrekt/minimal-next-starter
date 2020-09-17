import { MDBBtn, MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout page="Home">
      <MDBContainer>
        <h1>Hello Home</h1>
        <MDBBtn href="/about" color="dark" className="mx-0">
        {process.env.NEXT_PUBLIC_APP_NAME}
        </MDBBtn>
      </MDBContainer>
    </Layout>
  )
}

export default HomePage
