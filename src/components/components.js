import React, { Component } from 'react';
import Login from "./UI/Login/Login";
import { Link, Switch, Route } from 'react-router-dom';

import { withStyles } from "@material-ui/core/styles";
import Signup from "./UI/SignUp/SignUp";




const useStyles = theme => ({
    root: {
        
    },
});

class BaseComponent extends Component {    

    render() {
        /** CSS Classes */
        const { classes } = this.props;

        return (
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        );
    }
}

export default withStyles(useStyles)(BaseComponent);