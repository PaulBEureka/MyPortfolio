import Particle from "../Particle";
import { Container, Row } from "react-bootstrap";
import CredentialCard from "./CredentialCard";
import BasicReactImg from "../../Assets/Credentials/BasicReact.jpg";
import AdvReactImg from "../../Assets/Credentials/AdvancedReact.jpg";
import AWSAcadGraduateImg from "../../Assets/Credentials/AWS_Academy_Graduate.jpg";
import CodeChumPythonImg from "../../Assets/Credentials/Codechum_Python.jpg";
import ComptiaITFPlusImg from "../../Assets/Credentials/CompTIA_ITFPlus.jpg";
import JPCSImg from "../../Assets/Credentials/JPCS.jpg";
import WadhwaniEmployabilityImg from "../../Assets/Credentials/Wadhwani_JobReady.jpg";
import BaselineDataMLAI from "../../Assets/Credentials/Baseline_Data_ML_AI.png";
import BaselineInfrastructure from "../../Assets/Credentials/Baseline_Infrastructure.png";
import AutomateDeployment from "../../Assets/Credentials/Automate_Deployment.png";
import GoogleCloudEssentials from "../../Assets/Credentials/Google_Cloud_Essentials.png";

function Credentials() {
  return (
    <Container fluid className="certifications-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Certifications <strong className="purple">and </strong> Badges
          </h1>
        </Row>
      </Container>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h2 className="project-heading">
            My <strong className="purple">Certifications </strong>
          </h2>
        </Row>
        <CredentialCard
          image={AdvReactImg}
          title="Coursera - Advanced React"
          issuer="Meta"
          date="April 2025"
          description="Completed the Advanced React course, focusing on hooks, context API, and performance optimization techniques."
          link="https://www.coursera.org/account/accomplishments/verify/B3GEWI4OTPLN"
        />
        <CredentialCard
          image={BasicReactImg}
          title="Coursera - Basic React"
          issuer="Meta"
          date="Feb 2025"
          description="Completed the Basic React course, covering fundamental concepts such as components, state management, and lifecycle methods."
          link="https://www.coursera.org/account/accomplishments/verify/POYMBUEBL8KJ"
        />
        <CredentialCard
          image={ComptiaITFPlusImg}
          title="CompTIA IT Fundamentals (ITF+) Certification"
          issuer="CompTIA"
          date="July 2025"
          description="Achieved CompTIA IT Fundamentals (ITF+) certification, demonstrating foundational knowledge of IT concepts, terminology, and infrastructure."
          link="https://www.certmetrics.com/comptia/public/verification.aspx/"
        />
        <CredentialCard
          image={AWSAcadGraduateImg}
          title="AWS Academy Graduate - AWS Academy Cloud Foundations"
          issuer="AWS Academy"
          date="Nov 2023"
          description="Completed the AWS Academy Cloud Foundations course, gaining foundational knowledge of cloud computing and AWS services."
          link="https://www.credly.com/badges/326cee20-9d3f-48c2-9992-21a155bc9362/print"
        />
        <CredentialCard
          image={WadhwaniEmployabilityImg}
          title="Wadhwani - Employability Skills - JobReady"
          issuer="Wadhwani Foundation"
          date="June 2025"
          description="Completed the Wadhwani Employability Skills - JobReady course, enhancing job readiness skills such as communication, problem-solving, and teamwork."
          link="https://web.certificate.wfglobal.org/en/certificate?certificateId=68576be7dbb1c63612e3ed27"
        />
        <CredentialCard
          image={JPCSImg}
          title="Junior Philippine Computer Society (JPCS)-Mapúa Malayan Colleges Laguna Chapter"
          issuer="Junior Philippine Computer Society"
          date="2024 - 2025"
          description="Served as a member of the Junior Philippine Computer Society, contributing to various activities and initiatives aimed at promoting computer science education and professional development."
        />
        <CredentialCard
          image={CodeChumPythonImg}
          title="CodeChum - Python Course"
          issuer="CodeChum"
          date="Jan 2022"
          description="Completed the Python course on CodeChum, covering basic to intermediate Python programming concepts and applications."
        />
      </Container>
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            marginTop: "40px",
          }}
        >
          <h2 className="project-heading">
            My <strong className="purple">Badges </strong>
          </h2>
        </Row>
        <CredentialCard
          image={GoogleCloudEssentials}
          title="Google Cloud Essentials"
          issuer="Google Cloud"
          date="Aug 2023"
          description="Hands-on introduction to Google Cloud's core tools and services, from Cloud Shell commands to deploying apps on Kubernetes Engine."
          link="https://www.cloudskillsboost.google/public_profiles/42aeee5c-455e-4ca6-bb71-010c7ae500f3/badges/4875576"
        />
        <CredentialCard
          image={BaselineDataMLAI}
          title="Baseline: Data, ML, AI"
          issuer="Google Cloud"
          date="Sep 2023"
          description="Introductory quest using Google Cloud tools like BigQuery, Cloud Speech API, and Video Intelligence to explore big data, machine learning, and AI."
          link="https://www.cloudskillsboost.google/public_profiles/42aeee5c-455e-4ca6-bb71-010c7ae500f3/badges/5066741"
        />
        <CredentialCard
          image={BaselineInfrastructure}
          title="Baseline: Infrastructure"
          issuer="Google Cloud"
          date="Sep 2023"
          description="Hands-on course for novice cloud developers covering Cloud Storage, Monitoring, and Cloud Functions to build practical Google Cloud skills."
          link="https://www.cloudskillsboost.google/public_profiles/42aeee5c-455e-4ca6-bb71-010c7ae500f3/badges/5046335"
        />
        <CredentialCard
          image={AutomateDeployment}
          title="Automate Deployment and Manage Traffic on a Google Cloud Network"
          issuer="Google Cloud"
          date="Sep 2023"
          description="Introductory course on Google Cloud networking, covering VPCs, load balancers, and tools for building and managing robust cloud networks."
          link="https://www.cloudskillsboost.google/public_profiles/42aeee5c-455e-4ca6-bb71-010c7ae500f3/badges/4977842"
        />
      </Container>
    </Container>
  );
}

export default Credentials;
