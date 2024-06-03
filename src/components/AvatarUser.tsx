import { FC } from "react";

import { ExpandMore } from "@mui/icons-material";
import { Box, Avatar, Typography, BoxProps } from "@mui/material";

interface IAvatarUserProps extends BoxProps {
  showTitle?: boolean; // Condition for show user name
  showExpandMore?: boolean; // Condition for dropdown icon
}

const AvatarUser: FC<IAvatarUserProps> = ({ showTitle = true, showExpandMore = true, sx, ...props }) => {
  return (
    <Box sx={{ ...{ display: "flex", alignItems: "center", gap: 1 }, ...sx }} {...props}>
      <Avatar sx={{ color: "black", fontSize: 14, fontWeight: 500 }}>PH</Avatar>
      {showTitle && (
        <Box>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Phaisan</Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>phai</Typography>
        </Box>
      )}
      {showExpandMore && <ExpandMore />}
    </Box>
  );
};

export default AvatarUser;
