import React from 'react';
import {Dialog, DialogContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DialogHeader from "./DialogHeader";

const useStyles = makeStyles(theme => ({
    dialog: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(8)
    },
}));
export default function Popup(props) {
    const {handleOnClose, title, subTitle, openPopup, children, icon} = props;
    const classes = useStyles();

    return (
        <Dialog
            maxWidth={"md"}
            open={openPopup}
            classes={{paper: classes.dialog}}>
            <DialogHeader
                handleOnClose={handleOnClose}
                title={title}
                subTitle={subTitle}
                icon={icon}
            />

            <DialogContent dividers={true}>
                {children}
            </DialogContent>
        </Dialog>
    );
}