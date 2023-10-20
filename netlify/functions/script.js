const apiKey = process.env.REACT_APP_LINEAR_API_KEY;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey }),
    headers: {
      "Content-Type": "application/json", // Specify JSON content type
    },
  };
};
