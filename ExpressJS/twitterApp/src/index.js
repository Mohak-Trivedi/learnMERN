import express from "express";
import morgan from "morgan";
// import the below ones to be able to use __dirname even in ES6 Moduling, as
// it is available only in CommonJS moduling.
import * as url from "url";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";
import connectDB from "./config/dbConfig.js";

// Create a new express app/server object
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
console.log(__filename); // Full path to the current file
console.log(__dirname); // Directory path of the current file

// Set ejs as the View Engine
app.set("view engine", "ejs");

// Set the path for views. Without this, we get the following error:
// Error: Failed to lookup view "views/home.ejs" in views
// directory "C:\Users\trive\Documents\algoCamp-mern\ExpressJS\twitterApp\views"
// because it expects views directory in project directory's root, but we have
// it one level deeper i.e. in "src"
app.set("views", __dirname + "/views");

app.use(morgan("combined"));

app.use(express.json()); // to enable Express to read JSON req body data
app.use(express.text()); // to enable Express to read text req body data
app.use(express.urlencoded()); // to enable Express to read x-www-form-urlencoded req body data

app.use("/api", apiRouter);

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
  res.render("home", { name: "John Doe" });
});

app.get("/ping", [mid1, mid2, mid3], (req, res) => {
  return res.json({
    message: "pong",
  }); // return this upon GET ping/ request
});

app.all("*", (req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

// Define a port and attach it to the Express app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  connectDB();
});
