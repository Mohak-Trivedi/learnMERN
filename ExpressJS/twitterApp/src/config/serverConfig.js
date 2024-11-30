import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define a PORT variable
export const PORT = process.env.PORT || 3000;

//Define a MONGO_URL variable
export const MONGO_URL = process.env.MONGO_URL;
