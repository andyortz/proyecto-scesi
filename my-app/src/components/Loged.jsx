import * as React from "react";
import { useState } from "react";
import { Toolbar, Box, Typography, Button } from "@mui/material";
export default function Login({user}) {
  const [create, setCreate] = useState(false);
  return (
    <Box>
      <Toolbar>
        <Typography
          component="h3"
          variant="h5"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          `${user}`
        </Typography>
        <Button variant="contained" onClick={() => setCreate(true)}>
          CREATE
        </Button>
      </Toolbar>
    </Box>
  );
}
