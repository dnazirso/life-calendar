import { Button } from "@mui/material";
import { ReactNode } from "react";

export default function Age({ children }: { children?: ReactNode }) {
  return (
    <Button
      variant="outlined"
      sx={{
        p: 1,
        textAlign: "center",
        borderRadius: 20,
        height: 40,
        minWidth: 40,
      }}
    >
      {children}
    </Button>
  );
}
