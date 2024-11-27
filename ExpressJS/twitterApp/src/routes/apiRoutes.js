import express from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comment.js";

// Create a new Router() object
const router = express.Router();

router.use("/tweets", tweetRouter);

router.use("/comments", commentRouter);

// Export the router object
export default router;
