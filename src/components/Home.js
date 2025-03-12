import React, {useEffect} from 'react'
import "../App.css"; // Import the CSS file for styling
import Footer from './Footer';
export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          {
            threshold: 0.1, // Trigger animation when 10% of the element is visible
          }
        );
    
        // Observe all sections with the 'fade-in' class
        document.querySelectorAll(".fade-in").forEach((section) => {
          observer.observe(section);
        });
    
        // Cleanup observer
        return () => observer.disconnect();
      }, []);

    return (
        <div className="app">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <img
                src="../avatar.jpg" // Replace with your avatar image URL
                alt="Profile Avatar"
                className="avatar"
              />
              <h1>Hi, I'm Umar Sabir</h1>
              <p>Full Stack Developer | Tech Enthusiast | Problem Solver</p>
              <button className="cta-button">View My Work</button>
            </div>
          </section>
  
          {/* About Section */}
          <section className="about fade-in">
            <h2>About Me</h2>
            <p>
              I'm a passionate developer with expertise in building modern web
              applications. I love working with Ruby on Rails, React, Node.js, and other cutting-edge
              technologies to create seamless user experiences.
            </p>
          </section>
  
          {/* Projects Section */}
          <section className="projects fade-in">
            <h2>My Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>TrueAccess</h3>
                <p>A Ruby on Rails and React-based Facility user's credentialing site.</p>
                <a href="https://trueaccess.com/" className="project-link">
                  View Project
                </a>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>A Node.js backend for a social media app.</p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
              <div className="project-card">
                <h3>Project 3</h3>
                <p>A portfolio website built with React.</p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          </section>
  
          {/* Contact Section */}
          <section className="contact fade-in">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out to me for collaborations or just a friendly hello!</p>
            <a href="mailto:john.doe@example.com" className="cta-button">
              Email Me
            </a>
          </section>
        

          {/* Footer */}
            <Footer />
        </div>
    );
}
