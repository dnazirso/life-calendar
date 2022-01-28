import { Button, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import SignInContext, { User } from "../SignInContext";

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(SignInContext);

  useEffect(() => {
    if (
      new Date(context.user.birthdate).toLocaleDateString() !==
      new Date().toLocaleDateString()
    ) {
      navigate("/years");
    }
  }, [context, navigate]);

  const handleLogin = () => {
    context.setUser(user);
    navigate("/years");
  };

  const [user, setUser] = useState<User>({
    name: "",
    birthdate: new Date(),
  });

  const cantContinue =
    user.name.length > 0 &&
    user.birthdate.toLocaleDateString() !== new Date().toLocaleDateString();

  return (
    <Layout>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          placeholder="Name"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <TextField
          id="date"
          type="date"
          label="Birthdate"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setUser({ ...user, birthdate: new Date(e.target.value) });
          }}
        />
        <Button
          disabled={!cantContinue}
          onClick={handleLogin}
          variant="outlined"
          sx={{ py: 1.75 }}
        >
          Login
        </Button>
      </Stack>
    </Layout>
  );
}
