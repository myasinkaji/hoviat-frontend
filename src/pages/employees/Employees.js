import React from 'react';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PageHeader from "../../component/PageHeader";
import EmployeeForm from "./EmployeeForm";
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

export default function Employees() {

    const classes = useStyles();
    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon /*color="primary"*/ fontSize="large"/>}
            />

            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    );
}