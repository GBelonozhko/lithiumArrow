import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  table: {
    
  },
});

function createData(name, calories, fat, carbs, protein ,thing1, thing2) {
  return { name, calories, fat, carbs, protein, thing1, thing2 };
}

let cubed='3'

const rows = [
  createData('Gravimetric Energy Density (Wh/kg)', '45-80', '60-120', '30-50', '110-160','100-130', '80'),
  createData('Cycle Life (to 80% of initial capacity)', 237, 9.0, 37, 4.3),
  createData('Cell Voltage (nominal)', 262, 16.0, 24, 6.0),
  createData('Typical Battery Cost (US$, reference only)', 305, 3.7, 67, 4.3),
  createData('Cost per Cycle (US$)'.sup(), 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" component="h2">
      Table 1: Select Qualities of the 6 most Common Battery Chemistries
      </Typography>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Battery Chemistries</strong> </TableCell>
            <TableCell align="center"><strong>NiCd</strong></TableCell>
            <TableCell align="center"><strong>NiMH</strong></TableCell>
            <TableCell align="center"><strong>Lead Acid</strong></TableCell>
            <TableCell align="center"><strong>Li-ion</strong></TableCell>
            <TableCell align="center"><strong>Li-ion Polymer</strong></TableCell>
            <TableCell align="center"><strong>Reusable Alkaline</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row">
                <strong>Gravimetric Energy Density (Wh/kg)</strong>
              </TableCell>
              <TableCell align="center">45-80</TableCell>
              <TableCell align="center">60-120</TableCell>
              <TableCell align="center">30-50</TableCell>
              <TableCell align="center">110-160</TableCell>
              <TableCell align="center">100-130</TableCell>
              <TableCell align="center">80</TableCell>
            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>Cycle Life (to 80% of initial capacity)</strong>
              </TableCell>
              <TableCell align="center">1500 <sup>1</sup></TableCell>
              <TableCell align="center">300-500<sup>1,2</sup></TableCell>
              <TableCell align="center">200-300<sup>1</sup></TableCell>
              <TableCell align="center">500-100<sup>2</sup></TableCell>
              <TableCell align="center">300-500</TableCell>
              <TableCell align="center">50<sup>2</sup> <br/>(to 50%)</TableCell>
            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>Cell Voltage (nominal)</strong>
              </TableCell>
              <TableCell align="center">1.20V</TableCell>
              <TableCell align="center">1.20V</TableCell>
              <TableCell align="center">2V</TableCell>
              <TableCell align="center">3.6V</TableCell>
              <TableCell align="center">3.6V</TableCell>
              <TableCell align="center">1.5V</TableCell>
            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>Typical Battery Cost (US$, reference only)</strong>
              </TableCell>
              <TableCell align="center">$50 <br/>(7.2V)</TableCell>
              <TableCell align="center">$60 <br/>(7.2V)</TableCell>
              <TableCell align="center">$25 <br/>(6V)</TableCell>
              <TableCell align="center">$100 <br/>(7.2V)</TableCell>
              <TableCell align="center">$100 <br/>(7.2V)</TableCell>
              <TableCell align="center">$5 <br/>(9V)</TableCell>
            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>Cost per Cycle (US$) <sup>3</sup>  </strong>
              </TableCell>
              <TableCell align="center">$0.04</TableCell>
              <TableCell align="center">$0.12</TableCell>
              <TableCell align="center">$0.10</TableCell>
              <TableCell align="center">$0.14</TableCell>
              <TableCell align="center">$0.29</TableCell>
              <TableCell align="center">$0.10-$0.50</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant="h6" component="h2">
    Comparison of energy density, cycle life, voltage, and costs of the 6 most common battery chemistries. Adapted from Buchannan (2017).
    </Typography>

    <Typography variant="h6" component="h2">
    <sup>1</sup>Cycle life assuming regular battery maintenance. Cycle life reduced by a factor of three without periodic full discharge cycle application.
    </Typography>

    <Typography variant="h6" component="h2">
    <sup>2</sup>Cycle life founded on discharge depth. More cycles are provided by shallow discharges relative to  deep discharges (below 40% capacity).
    </Typography>

    <Typography variant="h6" component="h2">
    <sup>3</sup>Calcuated by battery price / cycle life. Price of electricity or external chargers not included.
    </Typography>

    <Typography variant="body1" component="h2">
    Buchannan, I., 2017, What’s the best battery? Battery University. https://batteryuniversity.com/learn/archive/whats_the_best_battery . Accessed July 15th, 2018. 
    </Typography>
    
    </div>
  );
}
