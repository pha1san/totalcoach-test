import { FC } from "react";

import { Box, BoxProps, Paper, Skeleton, Stack, Typography } from "@mui/material";

import Feed from "@/components/Feed";
import useAsync from "@/hooks/useAsync";
import { getActivityFeed } from "@/services/apis/getActivityFeed";

const ActivityFeed: FC<BoxProps> = ({ ...props }) => {
  const { loading, value: activityFeedList } = useAsync(getActivityFeed); // Using the useAsync hook to fetch the activity feed data

  return (
    <Box {...props}>
      <Typography variant="h2" sx={{ mb: 1.5 }}>
        Activity Feed
      </Typography>
      <Paper elevation={0} sx={{ borderRadius: 4, pr: 1 }}>
        <Box sx={{ height: 600, overflowY: "auto", p: 3, pr: 2 }}>
          <Stack spacing={2} alignContent="center" justifyContent="center">
            {!loading && typeof activityFeedList !== "undefined" //Check if data is loading or available
              ? // Display the feed items if data is available
                activityFeedList.map((feed) => <Feed key={feed.id} feed={feed} buttonPosition="bottom" />)
              : // Display skeleton loaders while data is being fetched
                Array.from({ length: 4 }, (_, i) => (
                  <Skeleton key={i} variant="rectangular" width="100%" height={180} sx={{ borderRadius: 4 }} />
                ))}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default ActivityFeed;
