import { Box, Typography } from "@mui/material";

import ActivityFeed from "@/features/ActivityFeed";
import InvitationFeed from "@/features/InvitationFeed";
import LessonMap from "@/features/LessonMap";

const Dashboard = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h1">Hello Phaisan,</Typography>
        <Typography sx={{ color: "text.secondary" }}>Here&apos;s what we have for you today.</Typography>
      </Box>
      <Box>
        <InvitationFeed />
      </Box>
      <Box sx={{ display: "flex", width: "100%", height: "100%", gap: 2, mt: 8 }}>
        <LessonMap sx={{ width: 1 / 2 }} />
        <ActivityFeed sx={{ width: 1 / 2 }} />
      </Box>
    </Box>
  );
};

export default Dashboard;
