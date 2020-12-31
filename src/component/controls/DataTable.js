import React, {useState} from 'react';
import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Paper, TableCell, TablePagination} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
    },
    table: {
        minWidth: 650,

        '& thead': {
            backgroundColor: theme.palette.primary.light
        },

        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
        },

        '& tbody tr': {
            cursor: 'pointer',
            fontWeight: '600',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2'
        },
    },
}));
export default function DataTable(props) {
    const {records, headers} = props;
    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    return (
        <Paper className={classes.root}>
            <Table size={"medium"} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align={"left"} key={0}>id</TableCell>
                        {
                            headers.map(header => (
                                <TableCell align={"left"} key={header.id}>{header.title}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                {props.children}
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={records.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};