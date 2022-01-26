import { Button, Stack, TextField } from "@mui/material";
import Layout from "../Layout";

export default function Login() {
  return (
    <Layout>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          placeholder="Name"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="E-mail"
          type="email"
          label="E-mail"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          type="date"
          label="Birthdate"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="outlined" sx={{ py: 1.75 }}>
          Login
        </Button>
      </Stack>
    </Layout>
  );
}
