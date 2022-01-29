import { useState } from "react";
import {
  CalendarViewWeek,
  CalendarToday,
  PermContactCalendar,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  return (
    <Grid item>
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/years")}
          label="Years"
          icon={<PermContactCalendar />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/weeks")}
          label="Weeks"
          icon={<CalendarViewWeek />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/today")}
          label="Today"
          icon={<CalendarToday />}
        />
      </BottomNavigation>
    </Grid>
  );
}
