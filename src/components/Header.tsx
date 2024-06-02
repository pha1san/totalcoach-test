import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, Grid } from "@mui/material";
import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { NAV_LINK } from "@/config/path";

import { Add, ExpandMore } from "@mui/icons-material";
import Button from "./Button";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", py: 0.5 }}>
      <Toolbar>
        <img src={Logo} alt="Your SVG" style={{ height: 24 }} />
        <Typography sx={{ fontSize: 10, ml: 1 }}>ATHLETE</Typography>
        <Box sx={{ display: "flex", mx: "auto", gap: 3 }}>
          {NAV_LINK.map((link, index) => (
            <Link to={link.link} key={index} style={{ textDecoration: "none", color: "black" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>{link.title}</Typography>
            </Link>
          ))}
        </Box>
        <Button variant="contained" sx={{ height: "48px", fontSize: 12, borderRadius: 2, mr: 2.5 }}>
          <Add sx={{ mr: 1 }} />
          Book Lesson
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "#A4A4A4", color: "black", fontSize: 14, fontWeight: 500 }}>PH</Avatar>
          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Phaisan</Typography>
            <Typography sx={{ fontSize: 12, color: "GrayText" }}>phai</Typography>
          </Box>
          <ExpandMore />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
