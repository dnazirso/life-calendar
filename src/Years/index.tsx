import { Container, Grid, Typography } from "@mui/material";
import Layout from "../Layout";
import { useAppSelector } from "../Store";
import Age from "./Age";

export default function Years() {
  const { years } = useAppSelector((state) => state.years);

  return (
    <Layout>
      <Container>
        <Typography textAlign="center" variant="h4" pb={4}>
          Your life in years
        </Typography>
        <Grid container justifyContent="space-evenly" maxWidth={420}>
          {years.map((year) => (
            <Grid key={year.date} item>
              <Age year={year} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
