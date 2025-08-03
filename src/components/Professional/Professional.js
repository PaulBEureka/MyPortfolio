import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

function Professional() {
  return (
    <Container fluid className="professional-section gap-5">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Experiences <strong className="purple">and </strong> Education
          </h1>
        </Row>
      </Container>

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h2 className="project-heading">
            My <strong className="purple">Experiences </strong>
          </h2>
          <p className="text-general">Here are a few experiences I've had.</p>
        </Row>
        <Row style={{ paddingBottom: "10px" }}>
          <ExperienceCard
            jobTitle="Web Developer Intern"
            company="Amkor Technology Philippines"
            tasksDone={[
              "Created a user manual for a newly developed asset management system",
              "Contributed in the development of a software that automates the process of checking the test results.",
            ]}
            date="May 13, 2025 - July 15, 2025"
            detailLink="/professional/ojt-amkor"
          />
          <ExperienceCard
            jobTitle="Freelancer"
            tasksDone={[
              "Developed a desktop application capable of converting a CSV file into a PDF grade report of students using windows forms and C#.",
              "Developed a math quiz bee application using MATLAB.",
              "Developed a customized Christmas mobile application having a pattern matching game and a letter using Android Studio and Java.",
            ]}
            date="June 2024 - November 2024"
          />
        </Row>
      </Container>

      <Container>
        <Row
          style={{ justifyContent: "center", padding: "10px" }}
          className="mt-5"
        >
          <h2 className="project-heading">
            My <strong className="purple">Education </strong>
          </h2>
          <p className="text-general">Here is my educational journey</p>
        </Row>
        <Row style={{ paddingBottom: "10px" }}>
          <EducationCard
            schoolName="Mapúa Malayan Colleges Laguna (MMCL)"
            degree="Bachelor of Science in Computer Science"
            tasksDone={[
              "Developed a large language model based companion mobile application that helps user's adapt sustainable mobile habits using Gemini 2.0, .NET MAUI, and .NET 9.0",
              "Created a website dedicated to learning game mechanics interactively and collaboratively using C#, MySQL and ASP.NET.",
              "Developed a comprehensive sample website for Barangay Majayjay using ASP.NET, C#, CSS, and SQL.",
              "Contributed to the development of a project capable of extracting text from cards and identify the suit and rank to determine the type of hand each player through computer vision with Python and OpenCV library.",
              "Developed a Tic Tac Toe console application having two game modes: Casual and Rush Mode. Both have two sub-options: vsBot and Two Player Mode. The user/s can choose between 3x3 (Easy) , 6x6 (Normal) , and 10x10 (Hard).",
            ]}
            date="Aug. 2021 - Ongoing"
          />
          <EducationCard
            schoolName="Mapúa Malayan Colleges Laguna (MMCL)"
            degree="Senior High School | STEM-M (Science, Technology, Engineering, Math, and Medicine)"
            tasksDone={["Graduated with High Honors"]}
            date="2019 - May 2021"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Professional;
