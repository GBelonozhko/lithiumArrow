import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../assets/Picture3.jpg'
import Pdf1 from '../assets/Thacker_Thesis_Ingraffia_PPT.pdf'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 340,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image1}
          title="Lithium at the Thacker Pass deposit,
          Humboldt County, Nevada, U.S.A.
          "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lithium at the Thacker Pass deposit,
          PowerPoint PDF

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Stratigaphy , Geochemistry, and Possible Origin of the Thacker Pass Lithium Clay Deposit, Humboldt County, Nevada, USA. 
          By: 
          James Ingraffia
          
          Advised by: 
          Dr. Mike Ressel
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Grid xs={3}>
          <Button variant='outlined' size="small" color="primary" className='float-left'>
            <a href={Pdf1}>View PDF</a>
          </Button>
        </Grid>
        <Grid xs={5}/>
        <Grid xs={4}>
         <Button variant='contained' size="small" color="secondary" className='float-right' >
           <a href={Pdf1} download>Download PDF</a>
         </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}