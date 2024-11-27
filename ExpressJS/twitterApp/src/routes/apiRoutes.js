import express from "express";
import v1Router from "./v1/v1Routes.js";
import v2Router from "./v2/v2Routes.js";

// Create a new Router() object
const router = express.Router();

router.use("/v1", v1Router);

router.use("/v2", v2Router);

// Export the router object
export default router;
