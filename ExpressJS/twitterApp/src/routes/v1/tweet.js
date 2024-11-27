import express from "express";
import {
  createTweet,
  getTweetById,
  getTweets,
} from "../../controllers/tweetController.js";

// Create a new router object
const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetById);

router.post("/", createTweet);

// Export the router object
export default router;
