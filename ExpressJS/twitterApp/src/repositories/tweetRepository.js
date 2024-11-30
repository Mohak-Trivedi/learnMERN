import Tweet from "../schema/tweet";

export const createTweet = async ({ tweet }) => {
  try {
    // Create and save a document in Tweet collection
    const tweet = await Tweet.create({ tweet });
    return tweet;
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
