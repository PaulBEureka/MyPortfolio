import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiReact, DiNodejs, DiJavascript1, DiPython, DiJava, DiCss3, DiHtml5, DiBootstrap, DiUnitySmall } from "react-icons/di";
import { SiSolidity, SiPhp, SiLaravel, SiFirebase, SiDotnet, SiCsharp, SiJinja, SiScikitlearn, SiXaml, SiSqlite } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-card-img align-self-center justify-self-center" />
      <Card.Body>
        <Card.Title className="fw-bold project-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="project-card-description">
          {props.description}
        </Card.Text>
        
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1 }}>
          <div className="project-techstack-icons">
            {props.techStack && props.techStack.map((tech, idx) => {
              const icons = {
                react: <DiReact title="React" key={idx} />,
                node: <DiNodejs title="Node.js" key={idx} />,
                javascript: <DiJavascript1 title="JavaScript" key={idx} />,
                python: <DiPython title="Python" key={idx} />,
                java: <DiJava title="Java" key={idx} />,
                solidity: <SiSolidity title="Solidity" key={idx} />,
                php: <SiPhp title="PHP" key={idx} />,
                laravel: <SiLaravel title="Laravel" key={idx} />,
                firebase: <SiFirebase title="Firebase" key={idx} />,
                dotnet: <SiDotnet title=".NET" key={idx} />,
                csharp: <SiCsharp title="C#" key={idx} />,
                jinja: <SiJinja title="Jinja" key={idx} />,
                scss: <SiScikitlearn title="SCSS" key={idx} />,
                xaml: <SiXaml title="XAML" key={idx} />,
                sqlite: <SiSqlite title="SQLite" key={idx} />,
                css: <DiCss3 title="CSS" key={idx} />,
                html: <DiHtml5 title="HTML" key={idx} />,
                bootstrap: <DiBootstrap title="Bootstrap" key={idx} />,
                unity: <DiUnitySmall title="Unity" key={idx} />,
              };
              return icons[tech] || null;
            })}
          </div>
        </div>

        <div className="gap-3 align-self-center justify-self-center">
          <Button variant="primary" href={props.ghLink} target="_blank" className="m-2">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              className="m-2"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>

        

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
