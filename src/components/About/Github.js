import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

function Github() {
  const { theme } = useContext(ThemeContext);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="PaulBEureka"
        blockSize={15}
        blockMargin={5}
        color={theme === "light" ? "#5eb6acff" : "#c084f5"}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
