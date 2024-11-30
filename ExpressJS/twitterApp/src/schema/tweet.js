import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: true,
    trim: true,
    maxLength: 280,
  },
});

// Create Model object i.e. Tweet collection from tweetSchema
const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
