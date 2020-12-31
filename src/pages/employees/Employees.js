import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PageHeader from "../../component/PageHeader";
import EmployeeForm from "./EmployeeForm";
import {makeStyles, Paper, TableCell, TablePagination} from "@material-ui/core";
import * as employeeService from '../../services/EmployeeService'
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import useTable from "../../component/useTable";

const useStyles = makeStyles(theme => ({
    tableRoot: {
        marginTop: theme.spacing(5),
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees);
    const {
        TblContainer,
        page,
        rowsPerPage,
        pages,
        handleChangeRowsPerPage,
        handleChangePage,
        pageAfterSortAndSelect
    } = useTable(records, employeeService.headers());

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
                <Paper className={classes.tableRoot}>
                    <TblContainer>
                        <TableBody>
                            {
                                pageAfterSortAndSelect().map((record, index) => (
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
                    </TblContainer>
                    <TablePagination
                        component="div"
                        rowsPerPageOptions={pages}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        count={records.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </Paper>
        </>
    );
}