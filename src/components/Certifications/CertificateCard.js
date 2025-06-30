import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function CertificateCard({ image, title, issuer, date, description, link }) {
  return (
    <Card className="certificate-card text-general mb-4 shadow-sm">
      <Row className="g-0 align-items-center">
        <Col md={4} xs={12} className="text-center p-3">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded certificate-img"
            style={{ maxHeight: 120, objectFit: "contain" }}
          />
        </Col>
        <Col md={8} xs={12} className="p-3">
          <Card.Body>
            <Card.Title className="purple">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {issuer} &nbsp;|&nbsp; <span style={{ fontSize: "0.95em" }}>{date}</span>
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">
                View Certificate
              </a>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CertificateCard;
