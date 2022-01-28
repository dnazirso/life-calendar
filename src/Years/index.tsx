import { Box, Grid } from "@mui/material";
import Layout from "../Layout";
import Year from "./Year";

export default function Years() {
  return (
    <Layout>
      <Grid container>
        <Grid item>
          <Box
            sx={{
              display: "grid",
              columnGap: 1,
              rowGap: 1,
              gridTemplateColumns: "repeat(10, 1fr)",
            }}
          >
            {Array.from({ length: 90 }, (_, i) => i + 1).map((n) => (
              <Year key={n}>{n}</Year>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
