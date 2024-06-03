import { FC } from "react";

import { Box, BoxProps, Typography } from "@mui/material";

import golfMap from "@/assets/maps-image/golf-course.png";
import { IconButtonCircle } from "@/components/Button";

const lessonButton = ["Putting", "Back", "Performance", "Left swing", "Putting", "Putting"];

const LessonMap: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Typography variant="h2" sx={{ mb: 1.5 }}>
        Lesson Map
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          height: "100%",
        }}
      >
        <Typography>Tap on the area of the lesson map to see what lessons have been taught in that area</Typography>
        <img src={golfMap} alt="golf course map" style={{ width: "90%" }} />
        <Box sx={{ display: "flex", gap: 3, justifyContent: "space-around", width: "100%", px: 6 }}>
          {lessonButton.map((lesson, index) => (
            <Box
              key={`lesson-${index}`}
              sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center", width: 1 / 6 }}
            >
              <IconButtonCircle color="primary" variant="contained" sx={{ width: 40, height: 40 }}>
                2
              </IconButtonCircle>
              <Typography>{lesson}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LessonMap;
