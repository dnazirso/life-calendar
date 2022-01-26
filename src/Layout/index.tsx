import { ReactNode } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Layout({
  children,
  signed,
}: {
  children: ReactNode;
  signed?: boolean;
}) {
  return (
    <Grid container direction="column" minHeight="100vh">
      <CssBaseline />
      <Grid item>
        <Header />
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs>
        <Grid item>{children}</Grid>
      </Grid>
      <Grid item>{signed && <Footer />}</Grid>
    </Grid>
  );
}
