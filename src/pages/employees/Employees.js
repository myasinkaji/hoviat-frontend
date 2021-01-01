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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Notification from "../../component/Notification";
import ConfirmDialog from "../../component/ConfirmDialog";


const useStyles = makeStyles(theme => ({
    tableRoot: {
        marginTop: theme.spacing(5),
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)

    },
    oddRow: {
        backgroundColor: 'rgba(246,197,202,0.15)'
    },
    evenRow: {
        backgroundColor: theme.palette.primary.light
    }
}));

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees);
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForUpdate, setRecordForUpdate] = useState(undefined);
    const [notify, setNotify] = useState({isOpen: false, title: '', message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})

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
        handlePopupClose();
        setNotify({
            isOpen: true,
            title: 'Success',
            message: 'Employee is registered successfully',
            type: 'success'
        });
    }

    const handleSearch = values => {
        setRecords(employeeService.search(values));
    }
    const handleOnUpdateClick = (record) => {
        setRecordForUpdate(record);
        setOpenPopup(true);
    }
    const handleOnDeleteClick = id => {
        employeeService.deleteEmployee(id);
        setNotify({
            title: 'Success',
            isOpen: true,
            type: 'error',
            message: `${id} is deleted Successfully`
        });
        setRecords(employeeService.getAllEmployees);
    }
    const handlePopupClose = () => {
        setOpenPopup(false);
        setRecordForUpdate(undefined);
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
                    <Grid item xs={12}>
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
                                    <TableRow
                                        className={index % 2 === 0 ? '' : classes.oddRow}
                                        key={record.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.email}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.department}</TableCell>
                                        <TableCell>
                                            <Controls.ActionButton
                                                color={'secondary'}
                                                onClick={() => {
                                                    handleOnUpdateClick(record)
                                                }}>
                                                <EditIcon fontSize={"small"}/>
                                            </Controls.ActionButton>

                                            <Controls.ActionButton
                                                color={'secondary'}
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        isOpen: true,
                                                        title: 'Are you sure to delete this record?',
                                                        subTitle: "You can't undo this operation",
                                                        onConfirm: () => handleOnDeleteClick(record.id)
                                                    });
                                                }}>
                                                <DeleteIcon fontSize={"small"}/>
                                            </Controls.ActionButton>
                                        </TableCell>
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
                    handleOnClose={handlePopupClose}
                    title={"New Employee"}
                    subTitle={"Adding New Employee"}
                    openPopup={openPopup}>
                    <EmployeeForm recordForUpdate={recordForUpdate} submitAware={submitAware}/>
                </Popup>
            </Paper>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    );
}