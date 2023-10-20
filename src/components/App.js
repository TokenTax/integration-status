import React from "react";
import "./App.css";
import styled from "styled-components";
import Status from "./status/index.js";
import useIssues from "./useIssues.js";
import Header from "./header/index.js";
import Components from "./components/index.js";
// import Incidents from "./incidents";
import Footer from "./footer/index.js";

const Container = styled.div`
  max-width: 1008px;
  padding: 16px;
  margin: 16px auto;
`;

const ComponentsContainer = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: white;
  padding: 16px;
`;

const App = () => {
  // loading, errors, results, refetch
  const [
    componentsLoading,
    componentsError,
    componentsResults,
    componentsRefetch,
  ] = useIssues("component");
  const [incidentsLoading, incidentsError, incidentsRefetch] =
    useIssues("incident");

  return (
    <Container>
      <Header />
      <ComponentsContainer>
        <Status
          loading={componentsLoading || incidentsLoading}
          error={{
            hasError: componentsError || incidentsError,
            errors: { componentsError, incidentsError },
          }}
          components={componentsResults}
          refetch={() => {
            componentsRefetch();
            incidentsRefetch();
          }}
        />
        <Components
          loading={componentsLoading}
          components={componentsResults}
        />
      </ComponentsContainer>
      {/* <Incidents loading={incidentsLoading} incidents={incidentsResults} /> */}
      <Footer />
    </Container>
  );
};

export default App;
