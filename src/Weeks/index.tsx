import { Container, Box, Paper } from "@mui/material";
import Layout from "../Layout";
import { useAppSelector } from "../Store";
import Days from "./Days";

export default function Weeks() {
  const { weeks } = useAppSelector((state) => state.weeks);

  return (
    <Layout title="Your life in weeks">
      <Container>
        <Paper
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            height: 650,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              flex: 1,
              position: "relative",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <Box
              justifyContent="space-evenly"
              maxWidth={420}
              sx={{
                overflow: "auto",
                flex: 1,
                display: "grid",
                columnGap: 0.15,
                rowGap: 0.15,
                gridTemplateColumns: "repeat(52, 1fr)",
              }}
            >
              {weeks.map((week) => (
                <Days key={week.id} week={week} />
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
}
