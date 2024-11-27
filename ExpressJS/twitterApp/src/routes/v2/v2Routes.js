import express from "express";
import tweetRouter from "./tweet.js";

// Create a new router object
const router = express.Router();

router.use("/tweets", tweetRouter);

// Export the router object
export default router;
