import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "./Particle";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDownload,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({
  fileUrl,
  purpleTitle,
  whiteTitle,
  whiteDescription = "",
  addBackButton = true,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber((prev) => (prev > numPages ? 1 : prev));
  }

  React.useEffect(() => {
    if (numPages && pageNumber > numPages) {
      setPageNumber(numPages);
    }
  }, [numPages, pageNumber]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const handlePrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  const handleBack = () => navigate(-1);

  return (
    <Container fluid className="pdfviewer-section">
      <Container className="py-4">
        <Row className="mb-2">
          <Col xs="auto">
            {addBackButton && (
              <Button
                className="btn-purple me-2"
                type="button"
                onClick={handleBack}
              >
                <AiOutlineArrowLeft /> Back
              </Button>
            )}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", padding: "20px" }}
          className="mb-3"
        >
          <Col>
            <h1 className="project-heading">
              {whiteTitle}
              <strong className="purple me-3 ms-2">{purpleTitle}</strong>
            </h1>
            <p className="text-general">{whiteDescription}</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs="auto" className="gap-3">
            <Button
              variant="primary"
              type="button"
              onClick={handlePrevPage}
              disabled={pageNumber <= 1}
              className="mx-1 mt-2"
            >
              <AiOutlineLeft />
            </Button>
            <span className="mx-2 align-middle text-general">
              Page {pageNumber} of {numPages || "-"}
            </span>
            <Button
              variant="primary"
              type="button"
              onClick={handleNextPage}
              disabled={pageNumber >= numPages}
              className="mx-1 mt-2"
            >
              <AiOutlineRight />
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={handleZoomOut}
              className="mx-1 mt-2"
            >
              <AiOutlineZoomOut />
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={handleZoomIn}
              className="mx-1 mt-2"
            >
              <AiOutlineZoomIn />
            </Button>
            <Button
              as="a"
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mx-1 mt-2 btn-custom"
              type="button"
            >
              <AiOutlineDownload /> Download
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="d-flex justify-content-center">
            <div
              className="pdf-viewer-container bg-transparent p-2 rounded shadow"
              style={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
              }}
            >
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div>Loading PDF...</div>}
              >
                <Page pageNumber={pageNumber} scale={scale} />
              </Document>
            </div>
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}
