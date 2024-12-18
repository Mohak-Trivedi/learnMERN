import express from "express";

// Create a new router object
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the tweet route v2",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Welcome to the tweet route v2",
    id: req.params.id,
  });
});

// Export the router object
export default router;
