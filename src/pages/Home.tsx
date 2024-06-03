import Carosel from "@/components/Carosel";
import Feed from "@/components/Feed";
import useAsync from "@/hooks/useAsync";
import { getInviationFeed } from "@/services/apis/getInviationFeed";
import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";

const inviationFeedPerPage = 3;

const Dashboard = () => {
  const { loading, value: inviationFeedList } = useAsync(getInviationFeed);

  console.log(inviationFeedList);

  return (
    <>
      <Box sx={{ my: 6 }}>
        <Typography variant="h1" sx={{ fontSize: 28, fontWeight: 700 }}>
          Hello Phaisan,
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>Here's what we have for you today.</Typography>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 600 }}>
          Invitation Feed
        </Typography>

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
    </>
  );
};

export default Dashboard;
