import { Button, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import SignInContext, { User } from "../SignInContext";
import { useAppDispatch } from "../Store";
import { setYears } from "../Store/yearsSlice";

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(SignInContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      new Date(context.user.birthdate).toLocaleDateString() !==
      new Date("10/10/1910").toLocaleDateString()
    ) {
      navigate("/years");
    }
  }, [context, navigate]);

  const handleLogin = () => {
    context.setUser(user);
    dispatch(setYears({ birthdate: user.birthdate }));
    navigate("/years");
  };

  const [user, setUser] = useState<User>({
    name: "",
    birthdate: new Date("10/10/1910").getTime(),
  });

  const canContinue =
    user.name.length > 0 && user.birthdate !== new Date("10/10/1910").getTime();

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
            setUser({
              ...user,
              birthdate: new Date(e.target.value).getTime(),
            });
          }}
        />
        <Button
          disabled={!canContinue}
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
