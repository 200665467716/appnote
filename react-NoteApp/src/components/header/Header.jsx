/* import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@mui/material'
import {LogoutOutlined} from '@ant-design/icons'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/icons-material/Menu';

const useStyles = makeStyles({
menuButton:{
  backgroundColor: '#ffff' 
}
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
     <Toolbar>
        <IconButton 
          color='inherit' 
          edge='start' 
          aria-label="Menu" 
          className={classes.menuButton} 
          onClick={() => {}}
          >
          <MenuIcon />
        </IconButton>
      <Typography variant="h6">React Material UI</Typography>
      <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};  
import { AppBar, Button, IconButton, Toolbar, Typography, Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <IconButton
            color='inherit'
            edge='start'
            aria-label="Menu"
            onClick={() => { }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 2, marginRight: 2 }}>React Material UI</Typography>
          <Box sx={{ flexGrow: 1 }} />}
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open="[true]">
      <h1>Hello</h1>
    </Drawer>
  );
}; 

export default Header;

import { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, Box, Drawer, ListItem, ListItemText, makeStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { List } from 'antd';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { list, root } from 'postcss';
import { Title } from '@mui/icons-material';
   


  const useStyles =  ({
root: {
  marginBottom : 30,
}

title: {
  flex : 1,
}

list: {
  width :250, 
}

  })


  const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false); // État pour le Drawer
  const [state, setState] = useState(false);
  const toggleDrawer = (toggle) => {

    setState(toggle);
  }
const list =() => (
  <div
  className={classes.list}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
     <List>
      <ListItem Button>
        <ListItemIcon>
          <ListItemText primary="Home" />        
        </ListItemIcon> 
      </ListItem> 
     </List>
  </div>

)


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton
              color="inherit"
              edge="start"
              aria-label="Menu"
              onClick={() => setOpenDrawer(true)} // Ouvrir le Drawer
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ marginLeft: 2, flexGrow: 1 }}>
              React Material UI
            </Typography>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

 
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">
            {list}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

import { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Divider } from 'antd';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const listComponent = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="A propos" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Paramètre" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItem>
      </List>
    </Box>
  );
;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="Menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
            React Material UI
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
 
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {listComponent()}
      </Drawer>
    </>
  );
};

export default Header;
*/

import { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const listComponent = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component="div">
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component="div">
          <ListItemIcon>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="À propos" />
        </ListItem>

        <Divider />

        <ListItem button component="div">
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Paramètres" />
        </ListItem>

        <ListItem button component="div">
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="Menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
            React Material UI
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer pour le menu latéral */}
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {listComponent()}
      </Drawer>
    </>
  );
};

export default Header;
