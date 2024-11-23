import express from "express";
import morgan from "morgan";

// Create a new express app/server object
const app = express();

app.use(morgan("combined"));

function mid1(req, res, next) {
  console.log("mid1");
  next();
}

function mid2(req, res, next) {
  console.log("mid2");
  next();
}

function mid3(req, res, next) {
  console.log("mid3");
  next();
}

function commonMiddleware(req, res, next) {
  console.log("common middleware");
  next();
}

app.use(commonMiddleware);

app.get("/ping", [mid1, mid2, mid3], (req, res) => {
  return res.json({
    message: "pong",
  }); // return this upon GET ping/ request
});

app.post("/hello", [mid1, mid3], (req, res) => {
  return res.json({
    message: "world",
  });
});

// Define a port and attach it to the Express app
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
