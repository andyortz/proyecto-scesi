import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import {
  Box,
  Paper,
  Toolbar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function ServicesList({ services, toggleService, categories }) {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Paper
        sx={{
          p: 2,
          marginY: 2,
          marginX: "auto",
          maxWidth: "85%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Toolbar>
          <Typography variant="h6">Search </Typography>
          <Box sx={{ maxWidth: 250, flexGrow: 1, mx: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Categories" />}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            sx={{ flexGrow: 1, marginX: 1 }}
            label="Titulo"
            variant="outlined"
          />
          <Button variant="contained" sx={{ maxWidth: 200, flexGrow: 1 }}>
            Go
          </Button>
        </Toolbar>
      </Paper>
      {services.map((service) => (
        <ServiceItem
          sx={{ py: 2 }}
          key={service.img}
          service={service}
          toggleService={toggleService}
        />
      ))}
      <Paper
        sx={{
          p: 2,
          marginY: 2,
          marginX: "auto",
          maxWidth: "85%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Toolbar>
          <Box sx={{ maxWidth: 250, flexGrow: 1, marginX: 2 }}>
            Numero de elementos mostrados en la lista
          </Box>

          <Button variant="contained">mostrar menos elementos</Button>
        </Toolbar>
      </Paper>
    </>
  );
}
