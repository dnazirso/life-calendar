import { BoxProps, Box } from "@mui/material";

export default function Year(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        border: "1px solid",
        p: 1,
        textAlign: "center",
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    />
  );
}
