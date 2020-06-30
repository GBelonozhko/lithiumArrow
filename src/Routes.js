import React, {useState}from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';



import Nav from "./Components/AppBar/AppBar";
import Footer from "./Components/Footer";

const Routes = () => {

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

return ( 
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Nav/>
        <Switch>
            <Route path="/lithiumArrow" exact component={Home} />
           
        </Switch>
        <Footer/>
    </BrowserRouter>
    </ThemeProvider>
)

};



export default Routes;
