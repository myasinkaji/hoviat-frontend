import React from 'react';
import {Card, DialogTitle, makeStyles, Typography} from "@material-ui/core";
import Controls from "./controls/Controls";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.light
        // backgroundColor: "#d9e2f8"
    },
    titleBar: {
        backgroundColor: theme.palette.primary.light
    },
    pageHeader: {
        // padding: theme.spacing(1),
        display: 'flex',
        // marginBottom: theme.spacing(2),
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(1),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: 0.6
        }
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
export default function DialogHeader(props) {
    const {title, subTitle, icon, handleOnClose} = props;
    const classes = useStyles();

    return (
        <DialogTitle className={classes.titleBar}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Typography variant="subtitle2" component="div">{subTitle}</Typography>
                </div>

                <span className={classes.closeButton}>
                    <Controls.ActionButton onClick={handleOnClose} color={'secondary'}>
                        <CloseIcon/>
                    </Controls.ActionButton>
            </span>
            </div>
        </DialogTitle>
    );
}