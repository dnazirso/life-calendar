import { useState } from "react";
import {
  CalendarViewWeek,
  CalendarToday,
  PermContactCalendar,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer({ signed }: { signed: boolean }) {
  const [page, setPage] = useState("/years");
  const navigate = useNavigate();

  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    name: string
  ) => {
    setPage(name);
    navigate(name);
  };

  return (
    <Box
      component={BottomNavigation}
      showLabels
      value={page}
      onChange={handleChange}
      display={signed ? "flex" : "none"}
    >
      <BottomNavigationAction
        label="Years"
        value="/years"
        icon={<PermContactCalendar />}
      />
      <BottomNavigationAction
        label="Weeks"
        value="/weeks"
        icon={<CalendarViewWeek />}
      />
      <BottomNavigationAction
        label="Today"
        value="/today"
        icon={<CalendarToday />}
      />
    </Box>
  );
}
