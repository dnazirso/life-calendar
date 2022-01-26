import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Container>
          <Typography component="h1" variant="h5">
            Life Calendar
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
