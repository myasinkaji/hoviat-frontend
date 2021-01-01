import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography} from "@material-ui/core";
import Controls from "./controls/Controls";
import {makeStyles} from "@material-ui/core/styles";
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    dialogTitle: {
        textAlign: 'center',
    },
    dialogContent: {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        textAlign: 'center',
    },
    dialogAction: {
        justifyContent: 'center'
    },
    dialogIcon: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
        cursor: 'default',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem'
        }
    }
}));

export default function ConfirmDialog(props) {
    const {confirmDialog, setConfirmDialog} = props;
    const classes = useStyles();

    const closeDialog = () => {
        setConfirmDialog({...confirmDialog, isOpen: false});
    }

    return (
        <Dialog classes={{paper: classes.dialog}} open={confirmDialog.isOpen}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple size={"small"} className={classes.dialogIcon}>
                    <NotListedLocationIcon fontSize={"large"}/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant={'h6'}>
                    {confirmDialog.title}
                </Typography>
                <Typography variant={'subtitle2'}>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text='No'
                    color={'primary'}
                    onClick={closeDialog}
                />
                <Controls.Button
                    text='Yes'
                    color={'secondary'}
                    onClick={() => {
                        confirmDialog.onConfirm();
                        closeDialog()
                    }}
                />
            </DialogActions>
        </Dialog>
    );
}