import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { StyledLink } from "baseui/link";
import {Input} from 'baseui/input';
import { Button } from "baseui/button";

const Footer = () => {
  return (
    <MDBFooter color="light" className="font-small pt-5 mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="black-text">
          <MDBCol md="6">
            <MDBRow>
              <MDBCol md="12" lg="12">
                <h5 className="smal">Footer Content</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="8" lg="8">
                <div className="my-3">
                  <Input 
                      name="name" 
                      type="text" 
                      placeholder="Your Name"
                      clearable
                      clearOnEscape
                      />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="8" lg="8">
                <Button className="w-100">Subscribe Newsletter</Button>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="6">
            <MDBRow>
              <MDBCol md="4" lg="4">
                <h5 className="title">Links</h5>
                <ul className="black-text list-unstyled">
                  <li>
                    <a className="black-text" href="#!">Link 1</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 2</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 3</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <h5 className="title">Links</h5>
                <ul className="black-text list-unstyled">
                  <li>
                    <a className="black-text" href="#!">Link 1</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 2</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 3</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <h5 className="title">Links</h5>
                <ul className="black-text list-unstyled">
                  <li>
                    <a className="black-text" href="#!">Link 1</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 2</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 3</a>
                  </li>
                  <li>
                    <a className="black-text" href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="my-3">
              <MDBCol md="2" lg="2">
                <a href="https://www.facebook.com/fredgaringo/" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBCol>
              <MDBCol md="2" lg="2">
                <a href="https://www.instagram.com/fredrekt/" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
              <MDBCol md="2" lg="2">
                <a href="https://twitter.com/FredGaringo" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="twitter" />
                </a>
              </MDBCol>
              <MDBCol md="2" lg="2">
                <a href="http://github.com/fredrekt" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="pinterest-p" />
                </a>
              </MDBCol>
              <MDBCol md="2" lg="2">
                <a href="http://github.com/fredrekt" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
              <MDBCol md="2" lg="2">
                <a href="https://www.linkedin.com/in/fredrick-garingo-430790185/" target="_blank" rel="noopenner noreferrer" className="black-text">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="pt-4 pb-5">
        <MDBContainer fluid>
          <div className="text-center black-text">Made with ❤️ by <StyledLink animateUnderline href="https://www.facebook.com/fredgaringo/">Fred Garingo</StyledLink></div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;