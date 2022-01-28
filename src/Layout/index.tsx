import { ReactNode, useContext } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./Header";
import { Footer } from "./Footer";
import SignInContext from "../SignInContext";

export default function Layout({ children }: { children: ReactNode }) {
  const context = useContext(SignInContext);

  const signed =
    new Date(context.user.birthdate).toLocaleDateString() !==
    new Date().toLocaleDateString();

  return (
    <Grid container direction="column" minHeight="100vh">
      <CssBaseline />
      <Grid item>
        <Header signed={signed} />
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs>
        <Grid item>{children}</Grid>
      </Grid>
      <Grid item>{signed && <Footer />}</Grid>
    </Grid>
  );
}
