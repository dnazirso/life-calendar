import { useState } from "react";
import { Restore, Favorite, LocationOn } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Grid } from "@mui/material";

export function Footer() {
  const [page, setPage] = useState(0);
  return (
    <Grid item>
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Grid>
  );
}
