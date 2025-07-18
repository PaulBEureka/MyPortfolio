import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Professional from "./components/Professional/Professional";
import OJTDetailsAmkor from "./components/Professional/Details/Amkor/OJTDetailsAmkor";
import PdfViewer from "./components/PDFViewer";
import AmkorFinalReport from "../src/Assets/Experiences/Final_Report.pdf";
import Certifications from "./components/Certifications/Certifications";
import Resume from "../src/Assets/Paul-Bataga-CV.pdf";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/resume"
            element={
              <PdfViewer
                fileUrl={Resume}
                whiteTitle={"My"}
                purpleTitle={"Resume"}
                addBackButton={false}
                whiteDescription="Have a look at my resume to know more about me."
              />
            }
          />
          <Route path="/professional" element={<Professional />} />
          <Route path="/professional/ojt-amkor" element={<OJTDetailsAmkor />} />
          <Route
            path="/professional/ojt-amkor/final-report"
            element={
              <PdfViewer
                fileUrl={AmkorFinalReport}
                whiteTitle={"Amkor Technology"}
                purpleTitle={"Philippines"}
                whiteDescription={"Internship Final Report"}
              />
            }
          />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
