import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from 'react-router-dom';


const useStyles = makeStyles( theme => ({
    root: {
        marginLeft: theme.spacing(5),
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',
        }
    },
    account: {
        textAlign: 'left',
        padding: theme.spacing(2),
        marginLeft: theme.spacing(-1),
        '& > *': {
            color: '#333',
            textAlign: 'center',
            color: 'blue',
            textDecoration: 'none',
            '&:hover': {
            }
        }
    }
}));

const Form = ({ label, path, accountLabel, checkBoxLabel, data}) => {
    
    const classes = useStyles();

    return (
        <form className={classes.root}>
            {/* <TextField id="filled-basic" variant="outlined" label="Email Or Phone" />
            <TextField id="filled-basic" variant="outlined" label="Password" />
            <FormControlLabel
                size="small"
                value="Remember Me"
                control={<Checkbox color="primary" />}
                label={checkBoxLabel}
                labelPlacement="end" 
            /> */}

            { data.map( (ele, key) => {
                if (ele.input === 'TextField')
                {
                   return <TextField
                        key={key}
                        variant={ele.variant}
                        label={ele.label}
                    />
                }
                else if (ele.input === 'FormControlLabel')
                {
                    return <FormControlLabel
                        size="small"
                        control={<Checkbox color="primary" />}
                        label={checkBoxLabel}
                        labelPlacement="end"
                    />
                }
            })}
            <Button variant="contained" color="primary">{label}</Button>
            <p className={classes.account}><Link to={path}>{accountLabel}</Link></p>
        </form>
    );
}

export default Form;