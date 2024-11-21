import express from "express";

// Create a new express app/server object
const app = express();

// Define a port and attach it to the Express app
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
