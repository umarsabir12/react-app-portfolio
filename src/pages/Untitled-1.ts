
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ContactForm from "../components/ContactForm";

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ContactPage = () => {
  const fields = [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'message', type: 'textarea', label: 'Message' },
  ];

  // State to track the current field index
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

  // Get the current field
  const currentField = fields[currentFieldIndex];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [currentField.id]: value,
    });
  };
  
   // Handle previous field
  const handleNext = () => {
    if (currentFieldIndex < fields.length - 1) {
      setCurrentFieldIndex(currentFieldIndex + 1);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </ContactWrapper>
  );
}; 

export default ContactPage;




{/* <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes> */}



// <ContactWrapper>
//   <Title>Contact Me</Title>
//   <Form onSubmit={handleSubmit}>
//     <Label htmlFor="name">Name:</Label>
//     <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//     <Label htmlFor="email">Email:</Label>
//     <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//     <Label htmlFor="message">Message:</Label>
//     <Textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
//     <Button type="submit">Send Message</Button>
//   </Form>
// </ContactWrapper>



// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/contact", formData);
//       console.log("Form submitted successfully:", response.data);
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };


