import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Title = styled.div`
  padding: 0 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

const Incidents = ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  return (
    <Container>
      <Title style={{ color: "white" }}>Incidents</Title>
      {!loading || hasMounted ? (
        incidents?.length > 0 ? (
          incidents?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound style={{ color: "white" }}>No Incidents found.</NoFound>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};

export default Incidents;
