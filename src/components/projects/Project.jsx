import React from "react";
import { Col } from "react-bootstrap";

function Project({ title, description, imgUrl, page, code, company }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="..." />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {page ? (
            <button className="btn btn-dark me-3">
              <a href={page}>Visit Project</a>
            </button>
          ) : (
            <button className="btn btn-dark me-3">{`No Access`}</button>
          )}
          {code ? (
            <button className="btn btn-light">
              <a href={code} style={{ color: "#000" }}>
                Show Code
              </a>
            </button>
          ) : (
            <button className="btn btn-dark me-3">{`For ${company} Company`}</button>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Project;
