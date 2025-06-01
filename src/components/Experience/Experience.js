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
                <Row style={{paddingBottom: "10px" }}>
                    <ExperienceCard
                        jobTitle = "Software Engineer Intern"
                        company = "Amkor Technology Philippines"
                        tasksDone = {['Created a user manual for a newly developed software', 'Contributed in the development of a software that automates the process of checking the test results']}
                        date = "May 13, 2025 - July 15, 2025"
                    />
                    <ExperienceCard
                        jobTitle = "Freelancer"
                        tasksDone = {['Developed a desktop application capable of converting a CSV file into a PDF grade report of students using windows forms and C#', 'Developed a math quiz bee application using MATLAB', 'Developed a customized Christmas mobile application having a pattern matching game and a letter using Android Studio and Java']}
                        date = "June 2024 - Present"
                    
                    />
                </Row>
            </Container>
        </Container>

    )
}

export default Experience
