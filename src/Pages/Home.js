import React, { useState, useEffect } from "react";
import HSlider from "../Components/HomeSlider"
import BioSlider from "../Components/BioSlider"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import Hidden from '@material-ui/core/Hidden';
import HorizImgList from '../Components/GridImgListHorriz';

import img1 from '../assets/column1.72.name(1).jpg'

import Table1 from '../Components/Table1';
import Table2 from '../Components/Table2';


const Home = () => {


    return(
        <div>


        


            <div className="bioComponent mb-5">
            
                <Grid
                   container
                   direction="row"
                   justify="center"
                   alignItems="top"
                >
                
                <Grid xs={12} >
                        <Typography variant="h1" component="h2" color='default' align='center'>
                            Best Reasons To Hire!
                        </Typography>
                    </Grid>

                    

                    <Grid xs={12} sm={12} md={6} className=' mx-5 '>
                        <Table1/>
                        <div className='my-5'>
                        <Table2 />
                        </div>
                    </Grid>
                    <Hidden smDown>
                    <Grid xs={12} sm={12} md={4} className=' mx-5 '>
                  

                    <img src={img1} />
                    </Grid>
                    </Hidden>

                    <HorizImgList/>

                    <Grid xs={12} >
                        <Typography variant="h1" component="h2" color='default' align='center'>
                            James Lithium Arrow Founder and CEO
                        </Typography>
                    </Grid>

                    
      
                    <Grid  xs={12} lg={5}  className=" mt-3 mx-3" >
                        <Typography  variant="body1" gutterBottom>
                            In the summer of 2014, it had precipitated a single day in one calendar year in Los Angeles. In pursuit of
                            my bachelor’s degree in geology at California State University, Northridge, I decided that my life’s
                            mission would be to mine the metals necessary for rechargeable battery construction to do my part in
                            slowing global warming. I graduated in 2015 with a specialization in microtectonics. was fortunate
                            enough to win summer field, and was picked up by the USGS through the NAGT program. I went to work
                            with Walter Mooney, in Menlo Park. There I studied precursor earthquakes in basaltic volcanic systems
                            like the Auckland Volcanic Field, to aid the effort to develop an early warning system for cities near
                            active volcanic systems.
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            When that ended, I applied to 5 PhD programs in an effort to figure out what to do next. Meeting
                            Elizabeth Miller was a significant event. I was Initially interested in cobalt. However during this time I
                            discovered the societal need for lithium, and the gap of economic geological understanding of that
                            element, while talking with Michael Manga (now the Department Chair of Geological and Planetary
                            Sciences at Berkley). It was now January of 2016, and I proceeded to spend every available weekend in
                            the Stanford Branner Earth Sciences Library consuming every ounce of lithium knowledge to be found
                            there. Around this time I discovered UNR, the Mackay School of Mines, and the lithium deposits across
                            Nevada. I had the priviledge to visit UNR during the summer of 2016, to meet Mark Coolbaugh and
                            discuss the lithium industry. While working in the tech sector and a short stint in Geotech, by fall of 2016
                            I received my acceptance letter to UNR to pursue a master’s degree in economic lithium geology – as a
                            member of the USGS again.
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            From January to September 2017, I spent 40 hours a week mixing  LiCl – KCl solutions and creating separates of Clayton Valley hectorite to discover the partition coefficient of lithium between synthetic brine and clays. Interested in a more self-directed economic lithium geology project, I left the USGS chemical project to investigate the uncharacterized lithium clay deposit of McDermitt under the tutelage of Mike. Mike would only take me on as a student if I had a project, if it was lithium, and I found a company to work with. Lithium Americas with Tom Benson and David Deek (since moved on) was there to take me on, with the help of Dennis Bryan to facilitate the connection.
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            With some guidance along the way, I developed and executed my own thesis project to characterize the $1.7 billion USD, world-class lithium clay deposit at Thacker Pass, McDermitt. This would not have been possible without the “you think you can do it? Here’re the tools, now prove yourself” tough-love attitude from Mike, nor the patience and support of my thesis committee. 
                        </Typography>
                    
                        <Typography  variant="body1" gutterBottom>
                            Simultaneous to completion of this thesis project, I have undertaken and completed many other supplemental endeavors in keeping with my belief that every scientist should be well rounded. These include: 
                        </Typography>

                        <ol>
                         <li>	A published extended abstract of this work in GSN with Mike and Tom. </li>
                         <li>	Completing a Graduate Minor of Business Administration with the College of Business, and the honor to study under Chris Howard. </li>
                         <li>	Being elected, and serving the graduate student body as the Representative of the College of Science to the Graduate School Association for 1 year. Chair of two committees: Research Grants and Events.</li>
                         <li>	Serving the Reno professional geologic community as the Vice Chair of the Association of Environmental and Engineering Geologists under Merrily Graham for 2 years.</li>
                         <li> 	Co-foundeding the federally recognized, financially independent, AEG Nevada Student Chapter to bring employment opportunities to the graduate and undergraduate geologic student body; this was done with the help and honor of leading a team of volunteer graduate and undergraduate peers to develop our platform, reach our industry partners and student body, execute each independent event, and do so under the patience and wisdom of John Louie. </li>
                        </ol>

                        <Typography  variant="body1" gutterBottom>
                          A thrill seeker by nature, and devout to the pursuit of technologically significant economic geology, I gave myself entirely to this project and embraced the unknown of what would happen to me afterwards. I have no plans after this presentation, nor after graduation.
                        </Typography>

                        
                    </Grid>

                    <Grid xs={12} md={6} className='mt-2 '>
                        <BioSlider/>
                    </Grid>

                </Grid>  
                
            </div>


                
       
       
                <div className="parallax"></div>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className='my-4'
            >
                <Grid className='mx-4 my-4'>                        
                    <Card1/>
                </Grid>

                <Grid className='mx-4 my-4'>                        
                    <Card2/>
                </Grid>

                <Grid className='mx-4 my-4'>                        
                    <Card3/>
                </Grid>
            </Grid>
          
            
      


        </div>
           
           
    )
};

export default Home;