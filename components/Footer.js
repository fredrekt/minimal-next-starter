import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="light" className="font-small pt-5 mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="black-text">
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
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
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.fredgaringo.ga"> Fred Garingo </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;