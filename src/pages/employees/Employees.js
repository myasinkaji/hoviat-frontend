import React, {useState} from 'react';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PageHeader from "../../component/PageHeader";
import EmployeeForm from "./EmployeeForm";
import {Grid, makeStyles, Paper, TableCell, TablePagination} from "@material-ui/core";
import * as employeeService from '../../services/EmployeeService'
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import useTable from "../../component/useTable";
import Popup from "../../component/Popup";
import Controls from "../../component/controls/Controls";
import EmployeeSearch from "./EmployeeSearch";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


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
    const [openPopup, setOpenPopup] = useState(false);

    const {
        TblContainer,
        page,
        rowsPerPage,
        pages,
        handleChangeRowsPerPage,
        handleChangePage,
        recordsAfterPagingAndSorting
    } = useTable(records, employeeService.headers());

    const submitAware = () => {
        setRecords(employeeService.getAllEmployees);
        setOpenPopup(false);
    }

    const handleSearch = values => {
        setRecords(employeeService.search(values));
    }

    return (
        <>
            <PageHeader
                title="Employee Page"
                subTitle="Adding, Searching, and Updating Employees"
                icon={<PeopleOutlineTwoToneIcon /*color="primary"*/ fontSize="large"/>}
            />

            <Paper className={classes.pageContent}>
                <Grid container>
                    <Grid item>
                        <EmployeeSearch handleSearch={handleSearch}/>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Button
                            text={"Add New"}
                            onClick={() => setOpenPopup(true)}
                            startIcon={<PersonAddIcon/>}
                        />
                    </Grid>
                </Grid>
                <Paper className={classes.tableRoot}>
                    <TblContainer>
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map((record, index) => (
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
                <Popup
                    icon={<PersonAddIcon fontSize="default"/>}
                    handleOnClose={() => setOpenPopup(false)}
                    title={"New Employee"}
                    subTitle={"Adding New Employee"}
                    openPopup={openPopup}>
                    <EmployeeForm submitAware={submitAware}/>
                </Popup>
            </Paper>
        </>
    );
}