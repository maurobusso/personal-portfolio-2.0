import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
//import OsContributions from "./OsContributions"

import Blackjack from "../../Assets/Projects/blackjack.png";
import FraserClinic from "../../Assets/Projects/fraser-clinic.png";
import NasaApp from "../../Assets/Projects/nasa-app.png";
import LaCalculator from "../../Assets/Projects/la-calculator.png";
import SQLProject from "../../Assets/Projects/SQL-project.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Blackjack}
              title="Blackjack"
              description="This is a one player blackjack game inspired by the Scrimba 
              developer course, but improved with the introduction of an API to show 
              the image of the cards. The whole project has been revritten in Typescript."
              ghLink="https://github.com/maurobusso/Blackjack_game"
              demoLink="https://blackjack-game-mauro.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={FraserClinic}
              title="Fraser Clinic Website"
              description="The Fraser Clinic website is a project commissioned by a client
              aimed at providing a space for patients to easily schedule appointments, 
              access informative resources, and stay up-to-date with the latest 
              news and services offered by Fraser Clinic."
              ghLink="https://github.com/maurobusso/fraser-footcare-website"
              demoLink="https://fraserfootcare.netlify.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SQLProject}
              title="Final Project for CS50 Intro to Databases"
              description="Project completed as the final assignment at the end of a 7-week course. 
              This served as an opportunity to apply my newfound skills in SQL and develop my very own database. 
              It is a database designed for a global healthcare system, intended to store healthcare records."
              ghLink="https://github.com/maurobusso/CS50-SQL-Final-Project"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={LaCalculator}
              title="Anaesthetic Calculator"
              description="This is a web app for podiatrist, borne out of 
              my own need for the automation of drug calculations and consolidation of 
              guidelines in one place. The aim of the app is to minimise human error, 
              by not relying on mental arithmetic, and to make guidelines easily
              accessible."
              ghLink="https://github.com/maurobusso/msd-app"
              demoLink="https://msd-app.netlify.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={NasaApp}
              title="NASA Data"
              description="App that allow the user to fetch data from some of NASA APIs 
              to obtain information and display images of our universe."
              ghLink="https://github.com/maurobusso/Explore-Space"
              demoLink="https://explore-space-app.netlify.app/"
            />
          </Col>
        </Row>

      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

