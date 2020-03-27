import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Form from '../Form/Form';


/** userStyles  */
const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '430px',
        paddingTop: theme.spacing(3)
    },
    typography: {
        textAlign: 'center',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(3)   
    }
}));

/** Theme Style */
const theme = createMuiTheme({
    typography: {
        fontFamily: [
          "'Baloo Da 2'", "cursive"].join(','),
      },
})

/** Sign Up Form */
const data = [
    {
        input  : 'TextField',
        id     : 'filled-basic',
        variant: 'outlined',
        label  : 'Full Name',
    },
    {
        input  : 'TextField',
        id     : 'filled-basic',
        variant: 'outlined',
        label  : 'Email'
    },
    {
        input  : 'TextField',
        id     : 'filled-basic',
        variant: 'outlined',
        label  : 'Enter Password'
    },
    {
        input  : 'FormControlLabel',
        control: {

        }
    }
]


export default () => {
    
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h3" className={classes.typography} component="h3">
                    {"Sign Up"}
                </Typography>
                
                {/** Form */}
                <Form
                    label="Sign Up"
                    path="/login"
                    accountLabel="Sign In  here!"
                    checkBoxLabel="Agree Terms & Condition"
                    data={data}
                />

            </Paper>
        </ThemeProvider>
    );
}
