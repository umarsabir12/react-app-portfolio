import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//   }
// `;

// const NavLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 1rem;

//   &:hover {
//     color: #ddd;
//   }
// `;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Portfolio</Logo>
      {/* <Nav>
        <NavLink to="/">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/about">
          <FaUser /> About
        </NavLink>
        <NavLink to="/projects">
          <FaLaptopCode /> Projects
        </NavLink>
        <NavLink to="/contact">
          <FaEnvelope /> Contact
        </NavLink>
      </Nav> */}
    </HeaderWrapper>
  );
};

export default Header;
