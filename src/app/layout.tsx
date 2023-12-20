import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import locale from "./locale";
import inter from "./inter";
import ThemeRegistry from "./ThemeRegistry";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Next Mui Bug Reproduction",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={locale.lang}>
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Box>{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
