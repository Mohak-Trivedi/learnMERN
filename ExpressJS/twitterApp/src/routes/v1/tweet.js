import express from "express";
import { getTweetById, getTweets } from "../../controllers/tweetController.js";

// Create a new router object
const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetById);

// Export the router object
export default router;
