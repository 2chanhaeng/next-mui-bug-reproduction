"use client";

import { ReactNode } from "react";
import lightTheme from "./lightTheme";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Typography variant="h1">This works</Typography>
      {children}
    </ThemeProvider>
  );
}
