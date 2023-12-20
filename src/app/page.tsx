import type { Metadata } from "next";
import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <Typography variant="h1">This breaks</Typography>
    // <h1>This works</h1>
  );
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
