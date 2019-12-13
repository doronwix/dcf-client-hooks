import React, { useContext } from 'react';
import {Context}  from './../providers/DataProvider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }));
const TextInput = (props) => {
    const classes = useStyles();
    const { name, label, type } = props;
    const {  updateSymbol } = useContext(Context);
    return(
        <div className="">
        <label htmlFor={name}>{label}</label>
        <TextField
            label="Symbol"
            className={classes.textField}
            type={type}
            name={name}
            id={name}
            onBlur={updateSymbol}
            margin="normal"
            variant="outlined"
        />
      </div>
    )
};
export default TextInput;