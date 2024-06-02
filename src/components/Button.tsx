import { Button as MuiButton, ButtonProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  color: "white",
}));

export default Button;
