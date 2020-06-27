import React, { useState, useEffect } from "react";
import HSlider from "../Components/HomeSlider"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

const Home = () => {


    return(
        <div>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <Grid xs={12} sm={9} className='mt-2'>
            <HSlider/>
        </Grid>
        <Grid xs={11} >
            <Typography variant="h1" component="h2" color='secondary' align='center'>
              James Awesome Website
            </Typography>
        </Grid>
        <Grid xs={2}/>
        <Grid xs={8} >
        <Typography  variant="body1" gutterBottom>
              Bacon ipsum dolor amet sausage pastrami salami shoulder buffalo t-bone chicken spare ribs. Sirloin boudin shank bacon turkey kevin picanha tenderloin beef ribs brisket ball tip. Porchetta ball tip capicola, bresaola venison andouille beef short loin. Bacon pork chop filet mignon biltong ball tip chuck turkey picanha brisket tongue drumstick. Jerky brisket pork prosciutto ball tip.
              Prosciutto t-bone ground round sausage brisket filet mignon, sirloin pork belly shoulder turducken ribeye short ribs meatloaf shankle pancetta. Chuck frankfurter pork chop pig biltong buffalo filet mignon, jowl porchetta turducken. Boudin beef jowl pork loin bresaola t-bone. Tongue turducken sirloin chicken bacon alcatra. Jowl chuck andouille jerky shankle venison. Strip steak prosciutto kevin, pork chop t-bone shank short ribs tri-tip rump beef ribs spare ribs. Spare ribs pastrami kevin t-bone hamburger shank ham chislic turducken filet mignon pig fatback porchetta.

            Jowl jerky sausage, andouille leberkas sirloin strip steak spare ribs cupim. Ham pork chuck burgdoggen short ribs. Turducken picanha bresaola beef ribs prosciutto tongue doner brisket. Jerky ham sausage flank boudin cow. Pork chop meatball prosciutto, tail sausage turducken pork belly shankle salami ball tip jowl tongue. Pork bacon burgdoggen hamburger kielbasa sausage turkey shankle.

            Brisket landjaeger tail buffalo jowl bresaola. Pork belly drumstick pork chop chuck strip steak meatloaf shankle shank bacon short ribs pork swine. Ham pancetta ground round, beef ribs turkey shoulder short loin fatback jowl shankle ham hock buffalo flank venison short ribs. Pancetta ham pastrami filet mignon tri-tip fatback landjaeger leberkas rump. Ham corned beef picanha, pork fatback brisket spare ribs tail tri-tip chicken andouille pork chop strip steak turducken tongue. Ham tenderloin jowl rump, short loin drumstick salami. Capicola bresaola flank cupim brisket.

            Picanha hamburger jowl pork chop swine ham hock sirloin t-bone pork loin kielbasa chuck shoulder capicola ribeye short loin. Sausage filet mignon ham hock t-bone short ribs, boudin frankfurter beef cow hamburger. Short loin t-bone pork tail. Ham pork belly prosciutto andouille buffalo pork loin frankfurter sirloin. Pastrami short ribs short loin pork chop picanha, doner ham hock kielbasa shankle landjaeger. Prosciutto turducken bacon, rump ball tip ground round beef ribs jowl cow venison hamburger chicken corned beef.
            </Typography>
        </Grid>
        <Grid xs={2}/>
 <Grid sm={1}/>
        <Grid xs={12} sm={3} >
            <Card1/>
        </Grid>
        <Grid xs={12} sm={3} >
            <Card2/>
        </Grid>
        <Grid xs={12} sm={3}>
            <Card3/>
        </Grid>
<Grid sm={1}/>


        </Grid>     
        </div>
    )
};

export default Home;