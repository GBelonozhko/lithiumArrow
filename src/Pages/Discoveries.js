import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';


import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

const Discoveries = () => {


    return(
        <div>

        <Grid xs={12} >
            <Typography variant="h1" component="h2" color='secondary' align='center'>
                Discoveries
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
                Thacker Pass Lithium Clay Deposit, McDermitt Caldera,
                North-Central Nevada: Devitrification of McDermitt Tuff
                as the Main Lithium Source
                </Typography>
            </Grid>

               <Grid className='mx-4 my-4'>                        
                   <Card1/>
               </Grid>

               <Grid className='mx-4 my-4'>                        
                   <Card2/>
               </Grid>

               <Grid className='mx-4 my-4'>                        
                   <Card3/>
               </Grid>
               <Grid xs={12} >
                    <Typography variant="h4" component="h2" color='primary' align='center'>
                        SUMMARY
                    </Typography>
                </Grid>
                <ul>
                <li>Lithium is a pivotal industrial metal of the 21st century.                </li>
                <li>Thacker Pass, in the McDermitt caldera, is the largest lithium clay deposit in the world.                </li>
                <li>High concentrations of Li in pre-eruptive McDermitt melt (Benson et al., 2017)                </li>
                <li>Not enough lithium in sediments to account for the overall McDermitt lithium budget.                </li>
                <li>McDermitt Tuff is a logical source of lithium as a product of degassing and devitrification.              </li>
                <li>Deposit alteration minerals are FeS, calcite, fluorite, k-spar, Li-illite, hectorite, analcime.                </li>
                <li>Lithium travels with many other elements including Be, B, S, As, Mo, F, K, Mg, Ca, C, Cl,                U, Hg, Cs, and Rb, which simultaneously enrich the system in different proportions.                </li>
                <li>The lithium mineralization was a result of remobilization from a combination of hydrothermal and diagenetic processes.                </li>

                </ul>

            </Grid>
            </Container>

            
        </div>


    )};



export default Discoveries;
