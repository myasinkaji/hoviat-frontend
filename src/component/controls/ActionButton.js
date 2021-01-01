import React from 'react';
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        // borderRadius: 0
        '&:hover':{
            color: theme.palette.primary.dark
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
    }
}));
export default function ActionButton(props) {
    const {color, onClick} = props;
    const classes = useStyles();

    return (
        <IconButton onClick={onClick} size={"small"} className={`${classes.root} ${classes[color]}`}>
            {props.children}
        </IconButton>
    );
}