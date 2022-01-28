import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/years");
  };

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
        <Button onClick={handleLogin} variant="outlined" sx={{ py: 1.75 }}>
          Login
        </Button>
      </Stack>
    </Layout>
  );
}
