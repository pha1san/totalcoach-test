import axiosInstance from "@/libs/axios";

export interface FeedType {
  id: string;
  title: string;
  coach: string[];
  startTime: string;
  endTime: string;
  location: string;
}

export const getInviationFeed = () => {
  return axiosInstance.get<{ feed: FeedType[] }>("/bca39459-6101-49c5-9664-7114d878533d").then((res) => res.data.feed);
};
