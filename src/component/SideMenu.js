import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '1200px',
        backgroundColor: '#253053',
    }
});

export default function SideMenu() {
    const classes = useStyles();

    return (
        <div className={classes.main}>

        </div>
    );
}