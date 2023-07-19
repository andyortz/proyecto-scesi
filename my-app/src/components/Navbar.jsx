import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Button} from '@mui/material';
import Login from './Login';

function ScrollTop(props) {
  const { children, window } = props;
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      {children}
    </Box>
  );
}

export default function BackToTop(props) {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products & Services Page
          </Typography>
          <Button variant='contained' onClick={() => setOpenPopup(true)} align="rigth"> Login </Button>
        </Toolbar>
      </AppBar>  
      </Box>
      <Toolbar id="back-to-top-anchor" />      
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Login openPopup={openPopup} setOpenPopup={setOpenPopup}/>
    </>
  );
}