import Header from "@/components/Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Navbar;
