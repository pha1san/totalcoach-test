import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

const Navbar = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Navbar;
