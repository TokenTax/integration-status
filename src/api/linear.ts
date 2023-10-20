import { LinearClient } from "@linear/sdk";

async function fetchApiKey() {
  try {
    const response = await fetch("/.netlify/functions/script");
    if (!response.ok) {
      throw new Error("Failed to fetch the secret API key");
    }
    const data = await response.json();
    return data.apiKey;
  } catch (error) {
    console.error("Error fetching the secret API key:", error);
    return null;
  }
}

async function initializeLinearClient() {
  const apiKey = await fetchApiKey();

  if (apiKey) {
    const linearClient = new LinearClient({ apiKey });
    return linearClient;
  } else {
    console.error(
      "Failed to fetch the secret API key. Cannot initialize LinearClient."
    );
    return null;
  }
}

export async function getMyIssues() {
  const linearClient = await initializeLinearClient();

  if (linearClient) {
    const team = await linearClient.team("INT");
    const myIssues = await team.issues();
    let issues: any[] = [];

    if (myIssues.nodes.length) {
      myIssues.nodes.map((issue) => issues.push(issue));
      return issues;
    } else {
      console.log(`INT has no issues`);
      return [];
    }
  } else {
    console.error("Failed to initialize LinearClient. Cannot fetch issues.");
    return [];
  }
}

export default getMyIssues;
