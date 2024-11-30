import { Filter } from "bad-words";
// aliasing to avoid name conflict
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ tweet }) => {
  // try to find blocked words in the tweet body and if any exists, don't create
  // the tweet and return an error message.
  const filter = new Filter();

  if (filter.isProfane(tweet)) {
    console.log(tweet);
    console.log(filter.clean(tweet));
    throw {
      message: "Tweet contains blocked words",
      status: 400,
    };
  }

  const tweetObj = await createTweetRepository({ tweet });
  return tweetObj;
};
