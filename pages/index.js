import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import Check from 'baseui/icon/check';
import {Table} from 'baseui/table';
import {StyledLink} from 'baseui/link';

const HomePage = () => {
  const DATA = [
    ['Search Engine Optimization', <Check size={24}/>],
    ['Material Design Bootstrap', <Check size={24}/>],
    ['Progressive Image Loading' , <Check size={24}/>],
    ['Minimal Design', <Check size={24}/>],
    ['GRAPHQL Ready', <Check size={24}/>],
    ['Fetch API', <Check size={24}/>],
    ['Customizable', <Check size={24}/>],
    ['CSS-in-JS - Styletron', <Check size={24}/>],
    ['Custom Error Pages', <Check size={24}/>],
    ['Easy to use', <Check size={24}/>],
    ['Server Side Rendering', <Check size={24}/>],
    ['Client Side Rendering', <Check size={24}/>],
    ['Prerendering', <Check size={24}/>],
    ['Rehydration', <Check size={24}/>]
  ];
  const COLUMNS = ['Features', 'Ready']

  return (
    <Layout page="Home">
      <MDBContainer className="py-5">
        <MDBRow className="align-items-center">
          <MDBCol md="6" lg="6">
            <p className="lead mb-4">What this next.js starter has:</p>
            <Table columns={COLUMNS} data={DATA} />
            <div className="content my-5">
              <StyledLink animateUnderline href="https://mdbootstrap.com/">Read about Material Design Boostrap</StyledLink>
              <br/>
              <StyledLink animateUnderline href="https://baseweb.design/">Read more about Base Web</StyledLink>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default HomePage
