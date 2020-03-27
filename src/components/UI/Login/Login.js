import React, {Component} from "react";
import Form  from "../Form/Form";

/** Third party */
import Paper from "@material-ui/core/Paper";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

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

/** Form Data */
const data = [
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
        label  : 'Password'
    },
    {
        input  : 'FormControlLabel',
        control: {

        }
    }
]

const Login = () => {

    const classes = useStyles();

    return (
            <Paper className={classes.root} elevation={3}>
               
                <ThemeProvider theme={theme}>

                    {/** TypoGraphy */}
                    <Typography 
                        variant="h4" 
                        component="h4" 
                        className={classes.typography}
                    >
                        {"Login Page"}
                    </Typography>

                    {/** Form */}
                    <Form 
                        label="Login"
                        path="/signup"
                        accountLabel="Create Account!"
                        checkBoxLabel="Remember Me"
                        data={data}
                    />

                </ThemeProvider>

            </Paper>
    );
}


export default Login;