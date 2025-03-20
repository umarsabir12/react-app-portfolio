import React from "react";
import "../App.css"; // Import the CSS file for styling
import { FaCode, FaLaptopCode, FaTools, FaRocket } from "react-icons/fa"; // Import icons from react-icons

export default function About() {
  return (
    <div className="app">
      {/* About Section */}
      <section className="about fade-in">
        <h2>About Me</h2>
        <div className="timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaCode size={24} />
            </div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p>
                I specialize in building modern web applications using React,
                Node.js, and other cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaLaptopCode size={24} />
            </div>
            <div className="timeline-content">
              <h3>UI/UX Enthusiast</h3>
              <p>
                I have a keen eye for design and love creating seamless user
                experiences.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaTools size={24} />
            </div>
            <div className="timeline-content">
              <h3>Problem Solver</h3>
              <p>
                I enjoy tackling complex problems and finding efficient
                solutions.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaRocket size={24} />
            </div>
            <div className="timeline-content">
              <h3>Continuous Learner</h3>
              <p>
                I'm always learning new technologies and improving my skills to
                stay ahead in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
