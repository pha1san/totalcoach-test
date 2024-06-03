import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)<ButtonProps>(() => ({
  color: "white",
}));

export const IconButtonCircle = styled(Button)<ButtonProps>(() => ({
  borderRadius: "100%",
  padding: 8,
  minWidth: 0,
  height: "100%",
}));

export default Button;
