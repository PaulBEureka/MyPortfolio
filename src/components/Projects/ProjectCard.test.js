import { render, sreen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCards from "./ProjectCards";
import Ensemble from "../../Assets/Projects/Ensemble.png";

describe(ProjectCards, () => {
  it("Project Card correctly displays the title", () => {
    const title = "Ensemble Learning Techniques in Machine Learning";

    const description =
      "This project explores ensemble learning techniques such as bagging and boosting. It highlights how these methods enhance predictive performance by combining the strengths of multiple models. The goal is to help users understand the value of model aggregation in machine learning.";

    const ghLink = "https://github.com/MemDbg/EnsembleCompare/tree/main";

    const techStack = ["jinja", "javascript", "python", "scss", "bootstrap"];

    const { getByText } = render(
      <ProjectCards
        imgPath={Ensemble}
        isBlog={false}
        title={title}
        description={description}
        ghLink={ghLink}
        techStack={techStack}
      />
    );

    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
