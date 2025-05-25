import React from 'react'
import { Container } from 'react-bootstrap'
import Particle from "../Particle";
import { Col, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function Experience(){
    return(
        <Container fluid className="experience-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <h1 className="project-heading">
                    My <strong className="purple">Experiences </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                    Here are a few experiences I've had.
                    </p>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={12} className="">
                        <ExperienceCard
                        jobTitle = "Software Engineer Intern"
                        company = "Amkor Technology Philippines"
                        logoPath = {"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Amkor_Technology_logo_%28B%29.svg/1200px-Amkor_Technology_logo_%28B%29.svg.png"}
                        description = "Developed an AI-based tool to help with the manufacturing process of the company"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default Experience
