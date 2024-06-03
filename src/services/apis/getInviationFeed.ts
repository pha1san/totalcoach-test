import { API_PATH_FEED } from "@/config/constant";
import axiosInstance from "@/libs/axios";
import { FeedType } from "@/types/feed";

/**
 * Function to call API for get inviation feed data.
 * @returns {Promise<FeedType[]>} - List of inviation feed.
 */
export const getInviationFeed = () => {
  return axiosInstance.get<{ feed: FeedType[] }>(API_PATH_FEED).then((res) => res.data.feed);
};
