import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import Router from "./services/providers/router.tsx";
import ThemeProvider from "./services/providers/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>,
);
