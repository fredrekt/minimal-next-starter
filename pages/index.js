import { MDBBtn, MDBContainer } from 'mdbreact'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <MDBContainer>
        <h1>Hello Home</h1>
        <MDBBtn color="dark" className="mx-0">Dark Button</MDBBtn>
      </MDBContainer>
    </div>
  )
}

export default HomePage
