import { Box, Typography } from "@mui/material";

import ActivityFeed from "@/features/ActivityFeed";
import InvitationFeed from "@/features/InvitationFeed";
import LessonMap from "@/features/LessonMap";

// Defining the Dashboard component
const Dashboard = () => {
  return (
    <Box sx={{ mb: 5 }}>
      {/* Component for typography and introduction message */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h1">Hello Phaisan,</Typography>
        <Typography sx={{ color: "text.secondary" }}>Here&apos;s what we have for you today.</Typography>
      </Box>

      {/* Invitation feed component */}
      <Box>
        <InvitationFeed />
      </Box>

      {/* Component for arranging the LessonMap and ActivityFeed side by side */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          gap: 2,
          mt: 8,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <LessonMap sx={{ width: { xs: 1, lg: 1 / 2 } }} />
        <ActivityFeed sx={{ width: { xs: 1, lg: 1 / 2 } }} />
      </Box>
    </Box>
  );
};

export default Dashboard;
