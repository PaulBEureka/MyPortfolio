import Particle from '../../../Particle';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFileEarmark } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import{ AiOutlineArrowLeft } from 'react-icons/ai';
import Amkor_logo from '../../../../Assets/amkor_logo.png';

function OJTDetailsAmkor() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <Container fluid className="professional-section text-light">
      <Container className="pb-4">
        <Row className="mb-2">
          <Col xs="auto">
            <Button className="btn-purple me-2" type="button" onClick={handleBack}>
              <AiOutlineArrowLeft /> Back
            </Button>
          </Col>
        </Row>
      </Container>
      
      {/* Header Section */}
      <Container>
        {/* Main Visual/Hero Image */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="ojt-hero-image-container mb-4 position-relative rounded shadow overflow-hidden">
              <img
                src={Amkor_logo} 
                alt="Amkor Internship Hero"
                className="w-100 ojt-hero-image"
                style={{ objectFit: 'cover', height: '260px', filter: 'brightness(0.85)' }}
              />
              <div className="ojt-hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white fw-bold text-shadow" style={{ fontSize: '2.2rem', textAlign: 'center' }}>
                  Internship at Amkor Technology Philippines
                </h2>
                <span className="badge bg-purple mt-2" style={{ fontSize: '1rem', background: '#6c2eb7' }}>2025</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Overview of the Company */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3 fw-bold">Company Overview</h4>
        <p className="text-general text-justify">
          Amkor Technology, Inc. is a global leader in semiconductor packaging and test services, recognized for its innovation and reliability since its founding in 1968. Headquartered in Arizona, the company operates across Asia, Europe, and North America, with its Philippine branch established in 1989. Amkor Technology Philippines plays a key role in developing internal IT solutions that support global operations. 
        </p>
      </Container>

      {/* Nature of the Tasks Given */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3 fw-bold">Nature of the Tasks Given</h4>
        <p className="text-general">
          During my internship at Amkor Technology Philippines, I was assigned a variety of tasks centered on module development, documentation. I started with a comprehensive orientation and was later immersed in the IT department’s Web Development team. My responsibilities included creating detailed user manuals for the company’s asset management system and a newly developed work order module for their internal workflow platform. I also took part in requirements gathering meetings, module development using jQuery and custom HTML within the workflow platform, and addressed technical limitations by proposing alternative solutions. Additional assignments included developing two request form modules under the Statistical Process Control (SPC) system. These tasks provided me with hands-on experience in both frontend development and technical documentation, while enhancing my understanding of real-world software development lifecycles.
        </p>
        
      </Container>

      {/* Total Hours Rendered */}
      <Container className="mb-5 text-start">
        <h4 className="project-heading mb-3 fw-bold">Synthesis of the Practicum Engagement</h4>
        <p className="text-general">
          Over the course of my internship, I rendered a total of 331 hours and 43 minutes. This included time spent on orientation, documentation, development, and consultations. Major portions were dedicated to creating the iCATS user manual (133 hours) and developing the iWorkflow Work Order module (over 104 hours). Additional hours were allocated to building and testing supplementary iWorkflow modules and preparing corresponding documentation. The practicum was successfully completed on July 14, 2025.
        </p>
      </Container>

      {/* Appendices */}
      <Container className="mb-5 text-start">
        <div className="text-end mt-3">
          <Link
            to='/professional/ojt-amkor/final-report'
            className="btn btn-primary d-inline-flex align-items-center"
          >
            View Final Report<BsFileEarmark className="ms-2" />
          </Link>
        </div>
      </Container>
      <Particle/>
    </Container>
  );
}

export default OJTDetailsAmkor;
