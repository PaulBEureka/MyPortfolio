import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../Assets/about.png";
import aboutImgTeal from "../../Assets/teal-about.png";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { ThemeContext } from "../../contexts/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={theme === "light" ? aboutImgTeal : aboutImg}
              alt="about"
              className="img-fluid"
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Let me introduce <strong className="purple">Myself </strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
