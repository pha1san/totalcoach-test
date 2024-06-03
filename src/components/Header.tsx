import { Add, ExpandMore } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.svg";
import { NAV_LINK } from "@/config/path";

import Button from "./Button";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", py: 0.5 }}>
      <Toolbar>
        <img src={Logo} alt="Your SVG" style={{ height: 24 }} />
        <Typography sx={{ fontSize: 10, ml: 1 }}>ATHLETE</Typography>

        {/* Navigation links */}
        <Box sx={{ display: "flex", mx: "auto", gap: 3 }}>
          {NAV_LINK.map((link, index) => (
            <Link to={link.link} key={index} style={{ textDecoration: "none", color: "black" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>{link.title}</Typography>
            </Link>
          ))}
        </Box>

        {/* Book Lesson button */}
        <Button variant="contained" sx={{ height: "48px", fontSize: 12, borderRadius: 2, mr: 2.5 }}>
          <Add sx={{ mr: 1 }} />
          Book Lesson
        </Button>

        {/* User avatar and name */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ color: "black", fontSize: 14, fontWeight: 500 }}>PH</Avatar>
          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Phaisan</Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>phai</Typography>
          </Box>
          <ExpandMore />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
