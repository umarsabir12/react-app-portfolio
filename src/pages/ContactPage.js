import React, { useState } from "react";
import styled from "styled-components";
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: #666;
  }

  &:last-child {
    margin-right: 0;
  }
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


console.log(" i am re renderedßß")



  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [currentField.id]: value,
    });
  };

  // Handle next field
  const handleNext = () => {
    console.log(currentFieldIndex)
    console.log(currentField.type )
    if (currentFieldIndex < fields.length - 1) {
      setCurrentFieldIndex(currentFieldIndex + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentFieldIndex < fields.length - 1) {
      handleNext();
    } else {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      // Optionally, you can reset the form or show a success message
      setFormData({ name: "", email: "", message: "" });
      setCurrentFieldIndex(0);
    }
  };

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        {/* Render the current field */}
        <ContactForm
          field={currentField}
          value={formData[currentField.id]}
          onChange={handleChange}
        />

        {/* Navigation buttons */}
        <div>
          {currentFieldIndex > 0 && (
            <Button type="button" onClick={() => setCurrentFieldIndex(currentFieldIndex - 1)}>
              Previous
            </Button>
          )}
          {currentFieldIndex < fields.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </Form>
    </ContactWrapper>
  );
};

export default ContactPage; 