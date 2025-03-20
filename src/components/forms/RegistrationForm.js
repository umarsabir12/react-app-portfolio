import {React, useState} from 'react'
import '../../styles/registrationForm.css';
import axios from "axios";

export default function RegistrationForm() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    console.log(e.target.name, ":i am rendered")
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
        console.log(formData);
        alert('Form submitted successfully!');
        const response = await axios.post("http://localhost:3000/api/registration", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    };

  return (
    <>
    <div className="registration-form-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>

    
  </div>
     <p style={{ marginTop: "20px", color: "#007bff", fontSize: "18px" }}>
        {formData.name && `Hello, ${formData.name}!`}
    </p>
    <p style={{ marginTop: "20px", color: "#007bff", fontSize: "18px" }}>
        {formData.email && `Just to Comfirm You entered this Email:, ${formData.email}!`}
    </p>
    <p style={{ marginTop: "20px", color: "#007bff", fontSize: "18px" }}>
        {formData.password && `Just to Comfirm You entered this Password:, ${formData.password}!`}
    </p>

    {formData.confirmPassword && (
        <p
        style={{
            marginTop: "20px",
            color: formData.password === formData.confirmPassword ? "green" : "red",
            fontSize: "18px",
        }}
        >
        {formData.password === formData.confirmPassword
            ? "Passwords match!"
            : "Passwords do not match!"}
        </p>
    )}
  </>
  )
}
