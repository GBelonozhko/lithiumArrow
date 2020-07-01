import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';


import Card1 from '../Components/ContactCard';
import IconButton from '@material-ui/core/IconButton';
import { MdCall } from 'react-icons/md';
const ContactUs = () => {


    return(
        <div>

        <Grid xs={12} >
            <Typography variant="h1" component="h2" color='secondary' align='center'>
                Contact Us
            </Typography>

        </Grid>

        <Container>
            <Grid
             container
             direction="row"
             justify="center"
             alignItems="center"
             className='my-4 border border-primary'
            >
            <Grid xs={12} >
                <Typography variant="h4" component="h2" color='primary' align='center'>

                </Typography>
            </Grid>

               <Grid className='mx-4 my-4'>                        
                   <Card1/>
               </Grid>

               
  

            </Grid>
            
            </Container>

            
        </div>


    )};



export default ContactUs;
