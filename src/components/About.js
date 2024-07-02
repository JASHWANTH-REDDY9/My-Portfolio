import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css'; // Custom CSS for styling

const skillsList = {
    "Languages": ["JavaScript", "Java", "Python","C++","C"],
    "Frontend": ["HTML", "CSS", "React", "Bootstrap"],
    "Backend": ["Node.js", "Express.js","Django"],
    "Databases": ["MongoDB", "SQL", "PostgreSQL"]
  };

const About = () => {
    return (
        <div className="dark-theme" id='about1'>
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content text-white" id='aboutt'>
                <h2>About Me</h2>
                <p>I am a passionate web developer with expertise in building modern, responsive web applications using React.</p>
                <p>Has Experience working with LLMs.</p>
                <p>Adaptable to changes in technology and a self-sustained learner.</p>
                <p>My goal is to create valuable digital experiences that solve real-world problems and bring joy to users.</p>
                {/* <a href="#contact" className="btn btn-primary">Resume</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills-list">
                <h1>Skills</h1>
                {Object.keys(skillsList).map((subcategory, index) => (
                  <div key={index}>
                    <h3>{subcategory}</h3>
                    <div className="skills-scroll-container">
                      {skillsList[subcategory].map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-card">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default About;
