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

const Header = () => {
  return process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <HeaderComp>
      <Logo src={logo} className="center mx-auto w-1/12" />
      <Title className="text-3xl text-white pt-3">Integration Status</Title>
    </HeaderComp>
  ) : null;
};

export default Header;
