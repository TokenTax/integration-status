const { LinearClient } = require("@linear/sdk");
const apiKey = process.env.REACT_APP_LINEAR_API_KEY;

exports.handler = async (event, context) => {
  try {
    const linearClient = new LinearClient({ apiKey });
    const team = await linearClient.team("INT");
    const myIssues = await team.issues();
    let issues = [];

    if (myIssues.nodes.length) {
      myIssues.nodes.forEach((issue) => issues.push(issue));
      //   throw new Error(JSON.stringify(issues));

      return {
        statusCode: 200,
        body: JSON.stringify({ issues }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    } else {
      console.log("INT has no issues");
      return {
        statusCode: 200,
        body: JSON.stringify({ issues: [] }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
