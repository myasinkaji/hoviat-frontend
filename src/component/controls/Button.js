import React from 'react';
import {Button as MuiButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        margin: theme.spacing(0.5),
    },
    label: {
        textTransform: 'none',
    }
}));
export default function Button(props) {
    const {variant, size, color, text, onClick, ...other} = props;
    const classes = useStyles();

    return (
        <MuiButton classes={{root: classes.root, label: classes.label}} size={size || 'medium'}
                   variant={variant || "contained"}
                   color={color || 'primary'}
                   onClick={onClick}
                   {...other}>
            {text}
        </MuiButton>
    );
}