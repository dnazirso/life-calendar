import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignInContext from "../SignInContext";

export default function Header({ signed }: { signed: boolean }) {
  const navigate = useNavigate();
  const context = useContext(SignInContext);
  const handleLogout = () => {
    context.logout();
    navigate("/");
  };
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Typography component="div" variant="h5" sx={{ flexGrow: 1 }} px={2}>
            Life Calendar
          </Typography>
          <IconButton
            size="large"
            sx={{ display: signed ? "" : "none" }}
            onClick={handleLogout}
          >
            <Logout />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
