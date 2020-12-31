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
    const {onSubmit, children} = props;
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={onSubmit}>
            {children}
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

    const handleReset = () => {
        setValues(initialFValues);
    }

    return {
        values,
        setValues,
        handleInputChange,
        handleReset,
    };
}