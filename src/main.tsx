import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import "./index.css";
import { AppRoutes } from "./routes.tsx";
import { theme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);
