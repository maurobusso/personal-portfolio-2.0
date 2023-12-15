import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSqllite,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiC,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-name">javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="tech-name">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="tech-name"></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="tech-name">Tailwind.css</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-name">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-name">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-name">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
        <div className="tech-name">SQL lite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div className="tech-name">Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-name">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
