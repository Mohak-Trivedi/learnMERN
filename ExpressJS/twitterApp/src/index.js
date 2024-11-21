import express from "express";

// Create a new express app/server object
const app = express();

app.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  }); // return this upon GET ping/ request
});

// Define a port and attach it to the Express app
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
