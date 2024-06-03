import { Box, Typography, Stack, Skeleton } from "@mui/material";

import Carosel from "@/components/Carosel";
import Feed from "@/components/Feed";
import useAsync from "@/hooks/useAsync";
import { getInviationFeed } from "@/services/apis/getInviationFeed";

// Number of invitations to display per page in the carousel
const inviationFeedPerPage = 3;

const InvitationFeed = () => {
  const { loading, value: inviationFeedList } = useAsync(getInviationFeed); // Using the useAsync hook to fetch the invitation feed data

  return (
    <Box>
      <Typography variant="h2">Invitation Feed</Typography>

      {!loading && typeof inviationFeedList !== "undefined" ? ( //Check if data is loading or available
        // Display the carousel with feed items if data is available
        <Carosel
          itemList={inviationFeedList.map((feed) => (
            <Feed key={feed.id} feed={feed} sx={{ maxWidth: 1 / 3, height: 200 }} />
          ))}
          itemsPerPage={inviationFeedPerPage}
          sx={{ mt: 4 }}
        />
      ) : (
        // Display skeleton loaders while data is being fetched
        <Stack spacing={4} direction="row" alignContent="center" justifyContent="flex-start" sx={{ mt: 4 }}>
          {Array.from({ length: inviationFeedPerPage }, (_, i) => (
            <Skeleton key={i} variant="rectangular" width={420} height={200} sx={{ borderRadius: 4 }} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default InvitationFeed;
