import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/Profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Nice to meet you{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                ヾ(＾ ∇ ＾).
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PAUL BATAGA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
              
            <Col md={5} className="myAvtar">
              <Tilt>
                <img src={profile} className="img-fluid Profile-circle" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
