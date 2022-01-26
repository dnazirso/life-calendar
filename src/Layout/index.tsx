import { ReactNode } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid container direction="column" height="100vh">
      <CssBaseline />
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs>
        <Container>{children}</Container>
      </Grid>
      <Footer />
    </Grid>
  );
}
