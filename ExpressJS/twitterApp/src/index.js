import express from "express";
import morgan from "morgan";
// import the below ones to be able to use __dirname even in ES6 Moduling, as
// it is available only in CommonJS moduling.
import * as url from "url";

// Create a new express app/server object
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log(__filename); // Full path to the current file
console.log(__dirname); // Directory path of the current file

// Set ejs as the View Engine
app.set("view engine", "ejs");

// Set the path for views. Without this, we get the following error:
// Error: Failed to lookup view "views/index.ejs" in views
// directory "C:\Users\trive\Documents\algoCamp-mern\ExpressJS\twitterApp\views"
app.set("views", __dirname + "/views");

app.use(morgan("combined"));

app.use(express.json()); // to enable Express to read JSON req body data
app.use(express.text()); // to enable Express to read text req body data
app.use(express.urlencoded()); // to enable Express to read x-www-form-urlencoded req body data

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

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ping", [mid1, mid2, mid3], (req, res) => {
  return res.json({
    message: "pong",
  }); // return this upon GET ping/ request
});

app.post("/hello", [mid1, mid3], (req, res) => {
  console.log("query params", req.query);
  console.log("req body", req.body);
  return res.json({
    message: "world",
  });
});

app.get("/tweets/:tweet_id/comments/:comment_id", (req, res) => {
  console.log(req.params);
  return res.json({
    message: "tweet_details",
  });
});

app.all("*", (req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

// Define a port and attach it to the Express app
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
