import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';



import pic1 from '../assets/biohappysuit.png'

import { MdCall } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height:250
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            James Ingraffia
          </Typography>
          <Typography variant="subtitle1" color="primary">
             Founder & CEO
          </Typography>
        <Typography variant="subtitle1" color="default">
             Email: IngraffiaJames@LithiumArrow.com
          </Typography>
          <Typography variant="subtitle1" color="default">
             Phone: 555-555-5555
          </Typography>
          <Typography variant="subtitle1" color="default">
             Business Address: 555 Big Boss ln Reno NV
          </Typography>
          <Typography variant="subtitle1" color="default">
             
          </Typography>
<CardActions>
          <IconButton color='secondary' size ='medium'>
          <MdCall/>
          </IconButton>

          <IconButton color='primary' size ='medium' >
          <AiOutlineMail/>
          </IconButton>
</CardActions>
        </CardContent>
       
      </div>
      <CardMedia
        className={classes.cover}
        image={pic1}
        title="Live from space album cover"
      />
    </Card>
  );
}