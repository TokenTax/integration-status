import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Branding = styled.a`
  color: #6e6b6b;
  font-size: 13px;
  text-decoration: none;
  transition: 0.3s;
  display: ${(props) => (props.visible ? "block" : "none")};

  :hover {
    opacity: 0.9;
  }
`;
const Footer = () => (
  <FooterComp>
    <div></div>
    <Branding
      visible={process.env.REACT_APP_BRANDING !== "false"}
      href="https://github.com/tokentax/integration-status"
      rel="noopener"
      target="_blank"
    ></Branding>
  </FooterComp>
);

export default Footer;
