import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import locale from "./locale";
import inter from "./inter";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CustomThemeProvider from "./CustomThemeProvider";

export const metadata: Metadata = {
  title: "Next Mui Bug Reproduction",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={locale.lang}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <CustomThemeProvider>
            <Box>{children}</Box>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
