import React from "react";
import styled from "styled-components";


const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;





const ContactForm = ({ field, value, onChange }) => {
    return (
        <div>
          <Label htmlFor={field.id}>{field.label}:</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.id}
              name={field.id}
              value={value}
              onChange={onChange}
              rows="5"
            />
          ) : (
            <Input
              type={field.type}
              id={field.id}
              name={field.id}
              value={value}
              onChange={onChange}
            />
          )}
        </div>
      );
};

export default ContactForm;