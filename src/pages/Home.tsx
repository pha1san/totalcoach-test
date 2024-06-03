import { Box, Typography } from "@mui/material";

import InvitationFeed from "@/features/InvitationFeed";

const Dashboard = () => {
  return (
    <>
      <Box sx={{ my: 6 }}>
        <Typography variant="h1">Hello Phaisan,</Typography>
        <Typography sx={{ color: "text.secondary" }}>Here&apos;s what we have for you today.</Typography>
      </Box>
      <Box>
        <InvitationFeed />
      </Box>
      <Box sx={{ display: "flex", width: "100%", height: "100%", gap: 2, mt: 8 }}>
        <Box sx={{ width: 1 / 2 }}>d</Box>
        <Box sx={{ width: 1 / 2 }}>
          <Typography variant="h2">Activity Feed</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
