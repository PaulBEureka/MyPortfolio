import React from 'react';
import Particle from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap';
import pdf from "../../../Assets/Paul-Bataga-CV.pdf";

function OJTDetailsAmkor() {
  return (
    <Container fluid className="professional-section text-light">
      

      {/* Header Section */}
      <Container>
        <Row className="justify-content-center py-4">
          <h2 className="project-heading">
            My Internship at <strong className="purple">Amkor Technology Philippines, Inc.</strong>
          </h2>
        </Row>
      </Container>

      {/* Overview of the Practicum Engagement */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3 ">Practicum Engagement Overview</h4>
        <p className="">
          Amkor Technology Philippines, Inc. is a leading provider of semiconductor packaging and test services. As an intern, I was assigned to the IT department where I assisted in improving internal web applications used for production monitoring and employee management. Over the course of my practicum, I rendered a total of <strong>330 hours</strong>, engaging in real-world software development, documentation, and testing processes.
        </p>
      </Container>

      {/* Presentation of Output */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3">Presentation of Output</h4>
        <p>
          During my internship, I worked on multiple modules including a logbook management system, internal data visualization dashboards, and form validation improvements. Below is a screenshot of one of the internal tools:
        </p>
        <img
          src="/images/amkor-dashboard-sample.png"
          alt="Amkor Module Screenshot"
          className="img-fluid rounded shadow mb-3"
        />
        <p>
          My responsibilities included fixing layout bugs, adding dynamic table filters, and improving UI responsiveness using React and Bootstrap. I also contributed to documentation for future interns and IT staff.
        </p>
      </Container>

      {/* Synthesis of the Practicum Engagement */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3">Synthesis of the Practicum Engagement</h4>
        <p>
          The internship helped bridge the gap between academic learning and industry standards. I learned the importance of clean code, teamwork, and agile practices. Through daily standups, pair programming, and task tracking, I gained real exposure to software development life cycles. This experience reinforced my interest in frontend development and improved my confidence in working on production-level applications.
        </p>
      </Container>

      {/* Appendices */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3">Appendices</h4>
        <ul>
          <li>
            <a href="https://drive.google.com/file/d/1g1urJhCu7JxumalFOcCQ_Y5DngRBI3iG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Endorsement Letter
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1uQI5VhmXWS3VZZ3DL66ktbyHMp8_ViZ4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Practicum Acceptance
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1WETcyQ_nTGA-06eENDwVcFZPXeo4Oilf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Liability Waiver
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1zkmKaPAFpHOj7BPHzcRsYD38yDDB_Vff/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Training Plan
            </a>
          </li>
          <li>
            <a href="/docs/WeeklyJournal.pdf" target="_blank" rel="noopener noreferrer">
              Complete Weekly Journal
            </a>
          </li>
        </ul>
      </Container>
      <Particle/>
    </Container>
  );
}

export default OJTDetailsAmkor;
