import React from "react";
import styled from "styled-components";
import logo from "../../img/tt-logo1.png";
import { Button } from "@tremor/react";
import { LinearClient, LinearFetch, User } from "@linear/sdk";
const apiKey = "lin_api_WSWDNIPnW2iI3UIWmev8n4Y6SaB9DzitCSIfAwTo";

const linearClient = new LinearClient({ apiKey });

async function getCurrentUser() {
  return linearClient.viewer;
}

async function getMyIssues() {
  const team = await linearClient.team("INT");
  const myIssues = await team.issues();
  let issues = [];

  if (myIssues.nodes.length) {
    myIssues.nodes.map((issue) => issues.push(issue));
    checkForDescription(issues);
  } else {
    console.log(`INT has no issues`);
  }
}

async function checkForDescription(issues) {
  issues.forEach((issue) => {
    if (issue.title.includes("solana") && issue.priorityLabel === "High") {
      console.log(`${issue.title}: Issue is related to solana`);
    }
  });
}

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
      <Logo src={logo} className="center mx-auto w-1/12" />
      <Title className="text-3xl text-white pt-3">Integration Status</Title>
      <Button variant="primary">hello</Button>
    </HeaderComp>
  ) : null;

export default Header;
