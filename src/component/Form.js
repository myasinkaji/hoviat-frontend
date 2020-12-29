import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));
export default function Form(props) {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    );
}

export function useForm(initialFValues) {
    const [values, setValues] = useState(initialFValues);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    return {
        values,
        setValues,
        handleInputChange
    };
}