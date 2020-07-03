import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

import { FcBusinessContact } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import { GiCrystalGrowth } from 'react-icons/gi';
import { GiCrystalBars } from 'react-icons/gi';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem button >
          
            <ListItemIcon> <FcHome/> </ListItemIcon>
            <ListItemText primary="Home"  />
            
          </ListItem>
        </Link>

        <Link href="/Discoveries">
          <ListItem button >
          
            <ListItemIcon> <GiCrystalGrowth/> </ListItemIcon>
            <ListItemText primary="Discoveries"  />
            
          </ListItem>
        </Link>

        <Link href="/AboutUs">
          <ListItem button >
          
            <ListItemIcon> <FcAbout/> </ListItemIcon>
            <ListItemText primary="About Us"  />
            
          </ListItem>
        </Link>

        <Link href="/ContactUs">
          <ListItem button >
          
            <ListItemIcon> <FcBusinessContact/> </ListItemIcon>
            <ListItemText primary="Contact Us"  />
            
          </ListItem>
        </Link>
        
      </List>
      <Divider />
      <List>
        {['Downloads', 'References', 'Credentials'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <GiCrystalGrowth /> : <GiCrystalBars />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}