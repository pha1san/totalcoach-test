import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: { primary: { main: "#67A586" }, background: { default: "#EAEAEA" } },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
