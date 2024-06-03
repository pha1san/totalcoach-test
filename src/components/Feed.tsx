import { FC } from "react";

import { ArrowForward, Place, WatchLater } from "@mui/icons-material";
import { Box, Card, CardProps, Chip, Divider, Stack, Typography } from "@mui/material";
import { blue, green, orange, purple, red } from "@mui/material/colors";

import { FeedType } from "@/types/feed";
import { formatDateStartEnd } from "@/utils/format";

import { IconButtonCircle } from "./Button";

export interface IFeedProps extends CardProps {
  feed: FeedType; // The feed data to be displayed
  buttonPosition?: "top" | "bottom"; // Optional position for the button
}

// Function to get a random color from the colours array
const colours = [blue[800], green[500], orange[500], purple[800], red[800]];
const getColour = () => colours[Math.floor(Math.random() * colours.length)];

const Feed: FC<IFeedProps> = ({ feed, sx, buttonPosition = "top", ...props }) => {
  return (
    <Card
      {...props}
      sx={{
        ...{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          p: 3,
          borderRadius: 3.5,
          background: "white",
        },
        ...sx,
      }}
    >
      <Box sx={{ display: "flex", mb: "auto" }}>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderWidth: "2px", borderColor: getColour(), borderRadius: 2, my: 0, mr: 0.5 }}
        />
        <Box>
          <Typography variant="h3"> {feed.title}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1 }}>
            {feed.coach.map((coach, index) => (
              <Chip key={index} label={coach} color="primary" sx={{ borderRadius: 1, fontSize: 12, height: "auto" }} />
            ))}
          </Box>
        </Box>
      </Box>
      <Stack sx={{ mt: 3 }} gap={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <WatchLater />
          <Typography>{formatDateStartEnd(feed.startTime, feed.endTime)}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Place />
          {feed.location}
        </Stack>
      </Stack>

      {/* Forward Button */}
      <IconButtonCircle
        color="primary"
        variant="contained"
        sx={{ position: "absolute", height: 40, right: 24, bottom: buttonPosition === "top" ? "none" : 24 }}
      >
        <ArrowForward />
      </IconButtonCircle>
    </Card>
  );
};

export default Feed;
