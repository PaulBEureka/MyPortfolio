import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve become completely hooked on programming, and I’m eager to grow alongside others in this amazing field! With a strong command of languages like {" "}
              <i>
                <b className="purple">C#, JavaScript,</b>
              </i>
              {" "}and {" "}
              <i>
                <b className="purple">Python</b>
              </i>
              {" "}
              , I’m continuously exploring new possibilities in web and mobile development.
              <br />
              <br />
              My passion lies in creating seamless user experiences and building dynamic applications. I’m particularly drawn to frameworks like 
              {" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              {" "}
              , where I can put my skills to the test.

              <br />
              <br /> 
              For me, programming feels like solving an intricate puzzle — each bug I fix is like finding the missing piece, bringing me closer to the perfect solution.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PaulBEureka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paul-bataga-438778317/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
