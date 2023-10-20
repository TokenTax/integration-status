import React from "react";
import styled from "styled-components";
import { useStatus, getComponentLabelPercent } from "./useStatus.js";
import useRefetch from "./useRefetch.js";

const StatusBar = styled.div`
  background-color: ${(props) =>
    props.backgroundColour ? props.backgroundColour : "#b1b1b1"};
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const Status = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const Reload = styled.button`
  background-color: transparent;
  color: white;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  text-align: right;
  padding: 0;
`;

const Code = styled.code`
  white-space: pre-wrap;
  display: block;
`;

export default ({ loading, error, components, refetch }) => {
  const [status] = useStatus(components);
  const [timeAgo] = useRefetch(refetch, loading);

  return (
    <>
      {error.hasError && (
        <Code>
          <div>An error occured</div>
          <div>
            You may have exceeded the rate limit. Try again in 1 hour to fetch
            the latest data.
          </div>
          {JSON.stringify(error.errors, null, 3)}
        </Code>
      )}
      <StatusBar backgroundColour={status?.backgroundColour}>
        <Status>{status?.message}</Status>
        <p>
          {Math.round(getComponentLabelPercent(components, "operational"))}%
          Operational
        </p>
        <Reload onClick={refetch}>
          {loading ? "reloading" : "Updated" + " " + timeAgo}
        </Reload>
      </StatusBar>
    </>
  );
};
