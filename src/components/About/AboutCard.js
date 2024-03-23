import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCode } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Mauro</span>. I am a passionate Software Developer.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCode /> Reading Books / Manga
            </li>
            <li className="about-activity">
              <AiFillCode /> Cooking
            </li>
            <li className="about-activity">
              <AiFillCode /> Playing Games
            </li>
            <li className="about-activity">
              <AiFillCode /> Traveling
            </li>
            <li className="about-activity">
              <AiFillCode /> Tinkering with with Linux and Raspberry Pi
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
