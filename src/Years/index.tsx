import { Container, Grid, Typography } from "@mui/material";
import Layout from "../Layout";
import Age from "./Age";

export default function Years() {
  return (
    <Layout>
      <Container>
        <Typography textAlign="center" variant="h4" pb={4}>
          Your years
        </Typography>
        <Grid container justifyContent="space-evenly" maxWidth={420}>
          {Array.from({ length: 90 }, (_, i) => i + 1).map((n) => (
            <Grid key={n} item>
              <Age>{n}</Age>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
