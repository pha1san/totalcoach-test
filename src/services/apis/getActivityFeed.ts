import { API_PATH_ACTIVITY } from "@/config/constant";
import axiosInstance from "@/libs/axios";
import { FeedType } from "@/types/feed";

/**
 * Function to call API for get activity feed data.
 * @returns {Promise<FeedType[]>} - List of activity feed.
 */
export const getActivityFeed = () => {
  return axiosInstance.get<{ activity: FeedType[] }>(API_PATH_ACTIVITY).then((res) => res.data.activity);
};
