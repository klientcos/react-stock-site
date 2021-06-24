import React from "react";
import styled from "styled-components";
import Img from "../assets/logo.svg";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <Navlink to="/"> Home </Navlink>
          <Navlink to="/"> Market </Navlink>
          <Navlink to="/"> Trade </Navlink>
          <Navlink to="/"> Pricing </Navlink>
          <Navlink to="/"> Download </Navlink>
          <Navlink to="/"> Download </Navlink>
        </Nav>
      </NavbarWrap>
    </NavbarContainer>
  );
}

export default Navbar;
