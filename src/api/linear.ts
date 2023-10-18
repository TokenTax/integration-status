import { LinearClient } from "@linear/sdk";
const apiKey = process.env.REACT_APP_LINEAR_API_KEY;

const linearClient = new LinearClient({ apiKey });

export async function getMyIssues() {
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
}

export default getMyIssues;
