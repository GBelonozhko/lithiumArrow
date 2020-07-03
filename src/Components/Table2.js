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
      Table 2: Thacker Pass Previously Estimated Lithium Smectite and Lithium Illite Stoichiometry
      </Typography>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Sample</strong> </TableCell>
            <TableCell align="center"><strong>Structural Formula</strong></TableCell>
            <TableCell align="center"><strong>Clay Type</strong></TableCell>
            <TableCell align="center"><strong>Structural type</strong></TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row">
                <strong>WLC03-01</strong>
              </TableCell>
              <TableCell align="center">K<sub>0.26</sub>Na<sub>0.09</sub>Ca<sub>0.19</sub>(Al<sub>0.55</sub>Mg<sub>4.31</sub><span>Li<sub>0.57</sub></span>Fe<sub>0.14</sub>Ti<sub>0.05</sub>)(Si<sub>7.72</sub>Al<sub>0.28</sub>)O<sub>20</sub>(OH<sub>2.33</sub>F<sub>1.67</sub>) · 4.6H<sub>2</sub>O</TableCell>
              <TableCell align="center">smectite</TableCell>
              <TableCell align="center">trioctahedral</TableCell>

            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>WLC03-02</strong>
              </TableCell>
              <TableCell align="center">K<sub>0.37</sub>Na<sub>0.04</sub>Ca<sub>0.18</sub>(Al<sub>0.47</sub>Mg<sub>4.41</sub><span>Li<sub>0.81</sub></span>Fe<sub>0.09</sub>)(Si<sub>7.77</sub>Al<sub>0.23</sub>)O<sub>20</sub>(OH<sub>1.80</sub>F<sub>2.20</sub>) · 6.8H<sub>2</sub>O</TableCell>
              <TableCell align="center">smectite</TableCell>
              <TableCell align="center">trioctahedral</TableCell>

            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>WLC03-03</strong>
              </TableCell>
              <TableCell align="center">K<sub>1.35</sub>Na<sub>0.04</sub>Ca<sub>0.04</sub>(Al<sub>0.12</sub>Mg<sub>4.09</sub><span>Li<sub>1.48</sub></span>Fe<sub>0.14</sub>Ti<sub>0.05</sub>)(Si<sub>7.86</sub>Al<sub>0.14</sub>)O<sub>20</sub>(OH<sub>1.03</sub>F<sub>2.97</sub>) · 2.9H<sub>2</sub>O</TableCell>
              <TableCell align="center">illite</TableCell>
              <TableCell align="center">trioctahedral</TableCell>

            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>WLC03-04</strong>
              </TableCell>
              <TableCell align="center">K<sub>1.33</sub>Na<sub>0.05</sub>Ca<sub>0.05</sub>(Al<sub>0.11</sub>Mg<sub>4.19</sub><span>Li<sub>1.50</sub></span>Fe<sub>0.10</sub>Ti<sub>0.05</sub>)(Si<sub>7.83</sub>Al<sub>0.17</sub>)O<sub>20</sub>(OH<sub>1.01</sub>F<sub>2.99</sub>) · 3.2H<sub>2</sub>O</TableCell>
              <TableCell align="center">illite</TableCell>
              <TableCell align="center">trioctahedral</TableCell>

            </TableRow>

            <TableRow >
              <TableCell component="th" scope="row">
                <strong>WLC03-05</strong>
              </TableCell>
              <TableCell align="center">K<sub>1.39</sub>Na<sub>0.05</sub>Ca<sub>0.01</sub>(Al<sub>0.22</sub>Mg<sub>3.82</sub><span>Li<sub>1.60</sub></span>Fe<sub>0.17</sub>Ti<sub>0.06</sub>)(Si<sub>7.89</sub>Al<sub>0.11</sub>)O<sub>20</sub>(OH<sub>0.92</sub>F<sub>3.08</sub>) · 2.6H<sub>2</sub>O</TableCell>
              <TableCell align="center">illite</TableCell>
              <TableCell align="center">trioctahedral</TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant="h6" component="h2">
    * Adj. from Morissette (2012). Previous work isolated and cleaned clay separates from the ore rock, characterized the separates with XRD and other methods for structure, then digested them with wet chemistry for elemental concentrations.
    </Typography>

    <Typography variant="h6" component="h2">
    ** Smectites from LGZ; Illites from HGZ.
    </Typography>

    <Typography variant="h6" component="h2">
    *** Illites have ~2x or ~3x more Li (lithium) than Smectites.
    </Typography>

    <Typography variant="h6" component="h2">
    **** Fluorine (F) is a primary anion complex of Li ore minerals.
    </Typography>

    
    
    </div>
  );
}
