import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Wheel } from "./Wheel";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <Wheel></Wheel>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
