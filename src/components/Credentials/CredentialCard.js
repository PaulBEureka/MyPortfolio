import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function CredentialCard({ image, title, issuer, date, description, link }) {
  const [showZoom, setShowZoom] = useState(false);

  return (
    <>
      <Card className="certificate-card text-general mb-4 shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={4} xs={12} className="text-center p-3">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded certificate-img"
              style={{
                maxHeight: 120,
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => setShowZoom(true)}
            />
          </Col>
          <Col md={8} xs={12} className="p-3">
            <Card.Body>
              <Card.Title className="purple">{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {issuer} &nbsp;|&nbsp;{" "}
                <span style={{ fontSize: "0.95em" }}>{date}</span>
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm mt-2"
                >
                  Verify Credential
                </a>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {showZoom && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={() => setShowZoom(false)}
            style={{
              position: "absolute",
              top: 30,
              right: 40,
              background: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: 24,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            aria-label="Close zoomed image"
          >
            &times;
          </button>
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              borderRadius: 8,
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              background: "#fff",
              padding: 8,
            }}
          />
        </div>
      )}
    </>
  );
}

export default CredentialCard;
