import { FC } from "react";

import { Box, Avatar, Typography, BoxProps } from "@mui/material";

interface IAvatarUserProps extends BoxProps {
  showTitle?: boolean; // Condition for show user name
}

const AvatarUser: FC<IAvatarUserProps> = ({ showTitle = true, sx, ...props }) => {
  return (
    <Box sx={{ ...{ display: "flex", alignItems: "center", gap: 1 }, ...sx }} {...props}>
      <Avatar sx={{ color: "black", fontSize: 14, fontWeight: 500 }}>PH</Avatar>
      {showTitle && (
        <Box>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Phaisan</Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>phai</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AvatarUser;
