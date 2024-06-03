import { useState } from "react";

import { Add, ExpandMore, Menu } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Avatar, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.svg";
import { NAV_LINK } from "@/config/path";

import Button from "./Button";
import MobileMemu from "./MobileMemu";
import AvatarUser from "./AvatarUser";

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMobile = useMediaQuery(theme.breakpoints.up("sm"));

  // { xs: 1, lg: 1 / 2 }

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", py: 0.5 }}>
      <Toolbar>
        {!matches && (
          <Button onClick={() => setOpen(true)}>
            <Menu color="secondary" />
          </Button>
        )}

        <img src={Logo} alt="Your SVG" style={{ height: 24 }} />
        <Typography sx={{ fontSize: 10, ml: 1 }}>ATHLETE</Typography>

        {/* Navigation links */}
        {matches && (
          <Box sx={{ display: "flex", mx: "auto", gap: 3 }}>
            {NAV_LINK.map((link, index) => (
              <Link to={link.link} key={index} style={{ textDecoration: "none", color: "black" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>{link.title}</Typography>
              </Link>
            ))}
          </Box>
        )}

        {/* Book Lesson button */}
        <Button
          variant="contained"
          sx={{
            height: 48,
            fontSize: 12,
            borderRadius: 2,
            mr: 2.5,
            ml: { xs: "auto", ls: 0 },
          }}
        >
          <Add sx={{ mr: { xs: 0, ls: 1 } }} />
          {matchesMobile && "Book Lesson"}
        </Button>

        {/* User avatar and name */}
        {matchesMobile && <AvatarUser showTitle={matches} />}
      </Toolbar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MobileMemu setOpen={setOpen} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
