import {React, useState} from 'react'
import axios from "axios";

export default function ProjSection() {
    const [projects, setProject] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        link: "",
    });

  function handleChange(e) {
    console.log(e.target.name, ":i am rendered")
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  }

  function handleAddProject() {
    if (!formData.name || !formData.description || !formData.link) {
        alert("Please fill in all fields");
        return;
      }
      setProject((prevProjects) => [...prevProjects, formData]);
      setFormData({
        name: "",
        description: "",
        link: "",
    });
  }
    return (
    
    <section className="projects fade-in">
    <h2>Add Projects</h2>
    {/* Add Project Form */}
    <div className="add-project-form">
    <input
        type="text"
        name="name"
        placeholder="Project Name"
        value={formData.name}
        onChange={handleChange}
    />
    <input
        type="text"
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
    />
    <input
        type="text"
        name="link"
        placeholder="Project Link"
        value={formData.link}
        onChange={handleChange}
    />
    <button onClick={handleAddProject}>Add Project</button>
    </div>


    {/* Dynamic Project Grid */}
    <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>

  </section>
  )
}
