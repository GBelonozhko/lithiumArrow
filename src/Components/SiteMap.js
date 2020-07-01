import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const URL ='https://gbelonozhko.github.io/lithiumArrow/';

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Site Map
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href={URL}> <MenuItem onClick={handleClose}>Home</MenuItem></Link>
        <Link href={URL + "Discoveries"}> <MenuItem onClick={handleClose}>Discovories</MenuItem></Link>
        <Link href={URL + "AboutUs"}><MenuItem onClick={handleClose}>About Us</MenuItem></Link>
        <Link href={URL + "ContactUs"}><MenuItem onClick={handleClose}>Contact Us</MenuItem></Link>
        <MenuItem onClick={handleClose}>Downloads</MenuItem>
        <MenuItem onClick={handleClose}>References</MenuItem>
        <MenuItem onClick={handleClose}>Credentials</MenuItem>
      </Menu>
    </div>
  );
}