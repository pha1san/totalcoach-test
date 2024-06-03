import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: { main: "#52AA86" },
    secondary: { main: "#A4A4A4" },
    background: { default: "#EAEAEA" },
    text: {
      primary: "#000000",
      secondary: "#808080",
    },
  },
  typography: {
    h1: { fontSize: 28, fontWeight: 700 },
    h2: { fontSize: 20, fontWeight: 600 },
    h3: { fontSize: 18, fontWeight: 600 },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#D9D9D9",
        },
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
