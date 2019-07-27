import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 bg-light">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol >
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol >
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <p>Link 1</p>
              </li>
              <li className="list-unstyled">
                <p>Link 2</p>
              </li>
              <li className="list-unstyled">
                <p>Link 3</p>
              </li>
              <li className="list-unstyled">
                <p>Link 4</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol >
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <p>Link 1</p>
              </li>
              <li className="list-unstyled">
                <p>Link 2</p>
              </li>
              <li className="list-unstyled">
                <p>Link 3</p>
              </li>
              <li className="list-unstyled">
                <p>Link 4</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p > Bhutas </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;