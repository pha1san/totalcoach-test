import { Dispatch, SetStateAction, FC } from "react";

import { Box, List, ListItem, ListItemButton, ListItemText, BoxProps, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { NAV_LINK } from "@/config/path";

import AvatarUser from "./AvatarUser";

export interface IFeedProps extends BoxProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMemu: FC<IFeedProps> = ({ setOpen }) => {
  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <AvatarUser sx={{ alignItems: "center", p: 2 }} />

      <List>
        {NAV_LINK.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton onClick={() => navigate(link.link)}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileMemu;
