import { StrictMode } from "react";

import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";

// import App from "./App.tsx";
import Router from "./services/providers/router.tsx";
import ThemeProvider from "./services/providers/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </StrictMode>,
);
