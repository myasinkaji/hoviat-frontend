import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PageHeader from "../../component/PageHeader";
import EmployeeForm from "./EmployeeForm";
import {Avatar, makeStyles, Paper, TableCell} from "@material-ui/core";
import Controls from "../../component/controls/Controls";
import * as employeeService from '../../services/EmployeeService'
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees);

    const awareState = () => {
        setRecords(employeeService.getAllEmployees);
    }

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon /*color="primary"*/ fontSize="large"/>}
            />

            <Paper className={classes.pageContent}>
                <EmployeeForm awareState={awareState}/>
                <Controls.DataTable records={records} headers={employeeService.headers()}>
                    <TableBody>
                        {
                            records.map((record, index) => (
                                <TableRow key={record.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{record.fullName}</TableCell>
                                    <TableCell>{record.email}</TableCell>
                                    <TableCell>{record.mobile}</TableCell>
                                    <TableCell>{record.department}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Controls.DataTable>
            </Paper>
        </>
    );
}