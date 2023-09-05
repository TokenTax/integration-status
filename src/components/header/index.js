import React from "react";
import styled from "styled-components";
import logo from "../../img/tt-logo1.png";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`;

const Logo = styled.img``;

const HeaderComp = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const Header = () =>
  process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <HeaderComp>
      <Logo src={logo} height="50" />
      <Title style={{ color: "white" }}>Integration Status</Title>
    </HeaderComp>
  ) : null;

export default Header;
