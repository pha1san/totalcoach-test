import { useState } from "react";

import { Add, Menu } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.svg";
import { NAV_LINK } from "@/config/path";

import AvatarUser from "./AvatarUser";
import Button from "./Button";
import MobileMemu from "./MobileMemu";

const Header = () => {
  const [open, setOpen] = useState(false); // State for open Side bar

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg")); // When screen is more than 1200px
  const matchesMobile = useMediaQuery(theme.breakpoints.up("sm")); // When screen is less than 600px

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", py: 0.5 }}>
      <Toolbar>
        {
          // Show hambunger menu when screen size is mobile
          !matches && (
            <Button onClick={() => setOpen(true)}>
              <Menu color="secondary" />
            </Button>
          )
        }

        <img src={Logo} alt="Your SVG" style={{ height: 24 }} />
        <Typography sx={{ fontSize: 10, ml: 1 }}>ATHLETE</Typography>

        {/* Navigation links */}
        {
          // Hidden nav link when screen is less than 1200px
          matches && (
            <Box sx={{ display: "flex", mx: "auto", gap: 3 }}>
              {NAV_LINK.map((link, index) => (
                <Link to={link.link} key={index} style={{ textDecoration: "none", color: "black" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>{link.title}</Typography>
                </Link>
              ))}
            </Box>
          )
        }

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
          {
            // Hidden button text when screen size is mobile
            matchesMobile && "Book Lesson"
          }
        </Button>

        {/* User avatar and name */}
        {
          // Hidden user avatar text when screen size is mobile
          matchesMobile && <AvatarUser showTitle={matches} />
        }
      </Toolbar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MobileMemu setOpen={setOpen} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
