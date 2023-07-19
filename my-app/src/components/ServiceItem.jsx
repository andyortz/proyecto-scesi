import React from "react";
import { CheckBox } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Typography, Checkbox, Toolbar, Button } from "@mui/material";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ServiceItem({ service, toggleService }) {
  const { img, text, isCompleted } = service;
  const handleChange = () =>{
    toggleService(img);
  };
  return (
    <Paper
      sx={{
        p: 3,
        marginY: 2,
        marginX: 'auto',
        maxWidth: '85%',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 150}}>
            <Img alt="complex" src="" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {img}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {text}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00 Button base view
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}