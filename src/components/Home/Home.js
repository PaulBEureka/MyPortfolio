import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/profile-nobg.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { ThemeContext } from "../../contexts/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={theme === "light" ? "home-section-light" : "home-section"}
    >
      <Particle />
      <Container fluid className="" id="home">
        <Container className="home-content">
          <Row className="justify-content-center align-items-center">
            <Col md={5} className="myAvatar d-flex align-items-center">
              <Tilt>
                <img
                  src={profile}
                  className="img-fluid profile-circle"
                  alt="avatar"
                />
              </Tilt>
            </Col>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, textAlign: "left" }}
                className="heading text-right"
              >
                Nice to meet you{" "}
                <span
                  className="wave"
                  role="img"
                  aria-labelledby="wave"
                  style={{ textAlign: "left" }}
                >
                  ヾ(＾ ∇ ＾).
                </span>
              </h1>

              <h1
                className="heading-name text-left"
                style={{ textAlign: "left" }}
              >
                I'M
                <strong className="main-name"> PAUL BATAGA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="mb-5">
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
