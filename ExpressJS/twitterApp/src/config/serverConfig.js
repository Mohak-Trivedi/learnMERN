import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define a port variable
export const PORT = process.env.PORT || 3000;
