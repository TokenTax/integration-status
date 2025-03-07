import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Status from "./status.js";

const Component = styled.div`
  background-color: #f7f8f9;
  padding: 8px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Components = ({ component }) => {
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("/.netlify/functions/script");

        if (response.ok) {
          const data = await response.json(); // Parse the JSON response

          if (Array.isArray(data.issues)) {
            // Check if the response contains an array of issues
            const filteredIssues = data.issues.filter((issue) => {
              const lowercaseIssueTitle = issue.title.toLowerCase();
              const lowercaseComponentTitle = component.title.toLowerCase();
              return lowercaseIssueTitle.includes(lowercaseComponentTitle);
            });

            setFilteredIssues(filteredIssues);
          } else {
            console.log("No issues array in the response.");
          }
        } else {
          console.log("Server response was not ok.");
        }
      } catch (error) {
        console.error("Error fetching and processing data: " + error.message);
      }
    }

    fetchIssues();
  }, [component.title]);

  return (
    <Component>
      <div className="flex justify-between">
        {component.title} <Status labels={component.labels} />
        <button className="flex my-auto text-sm" onClick={() => setShow(!show)}>
          {filteredIssues.length === 1
            ? `Show ${filteredIssues.length} current issue`
            : `Show ${filteredIssues.length} current issues`}
          <div className="my-auto pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        </button>
      </div>
      <div>
        {filteredIssues.map((issue) =>
          show ? (
            <ul className="pt-1">
              <li key={issue.id} className="justify-between flex">
                <a href={issue.url} className="capitalize hover:underline">
                  {issue.title}
                </a>
                <p className="text-sm my-auto font-extralight text-slate-500">
                  {issue.priorityLabel}
                </p>
              </li>
            </ul>
          ) : null
        )}
      </div>
    </Component>
  );
};

export default Components;
