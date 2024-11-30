import Tweet from "../schema/tweet.js";

export const createTweet = async ({ tweet }) => {
  try {
    // Create and save a document in Tweet collection
    const tweetObj = await Tweet.create({ tweet });
    return tweetObj;
  } catch (error) {
    throw error;
  }
};

export const getTweet = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

export const getTweetById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};
