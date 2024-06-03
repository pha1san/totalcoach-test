import { Box, Typography, Stack, Skeleton } from "@mui/material";

import Carosel from "@/components/Carosel";
import Feed from "@/components/Feed";
import useAsync from "@/hooks/useAsync";
import { getInviationFeed } from "@/services/apis/getInviationFeed";

const inviationFeedPerPage = 3;

const InvitationFeed = () => {
  const { loading, value: inviationFeedList } = useAsync(getInviationFeed);

  return (
    <Box>
      <Typography variant="h2">Invitation Feed</Typography>

      {!loading && typeof inviationFeedList !== "undefined" ? (
        <Carosel
          itemList={inviationFeedList.map((feed) => (
            <Feed key={feed.id} feed={feed} sx={{ maxWidth: 1 / 3, height: 200 }} />
          ))}
          itemsPerPage={inviationFeedPerPage}
          sx={{ mt: 4 }}
        />
      ) : (
        <Stack spacing={4} direction="row" alignContent="center" justifyContent="flex-start">
          {Array.from({ length: inviationFeedPerPage }, (_, i) => (
            <Skeleton key={i} width={420} height={200} sx={{ m: 0 }} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default InvitationFeed;
