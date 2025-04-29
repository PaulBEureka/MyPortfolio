import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Paul Bataga </span>
            from <span className="purple"> Laguna, Philippines.</span>
            <br />
            <br />
            With my passion towards programming, I create mobile and web applications.
            <br />
            <br />
            I value creativity, precision, and delivering impactful results as I combine my technical expertise with thoughtful design in solving real-world problems.
            <br />
            <br />
            I am currently a Computer Science (BSCS) student as Mapua Malayan Colleges Laguna.
            <br />
            <br />
            Coding aside, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (particularly handheld)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading mangas and watching animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating and taking naps
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Life is a one-time adventure—make every move count."{" "}
          </p>
          <footer className="blockquote-footer">Paul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
