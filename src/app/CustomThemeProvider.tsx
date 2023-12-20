"use client";

import { ReactNode } from "react";
import lightTheme from "./lightTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
