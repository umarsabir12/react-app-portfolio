import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <AboutWrapper>
      <Title>About Me</Title>
      <Description>
        I am a web developer with experience in React, JavaScript, and modern
        web technologies. I enjoy creating beautiful and functional websites.
      </Description>
    </AboutWrapper>
  );
};

export default AboutPage;