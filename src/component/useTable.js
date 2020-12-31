import React, {useState} from 'react';
import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {TableCell} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,

        '& thead': {
            backgroundColor: theme.palette.primary.light
        },

        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
        },

        '& tbody td': {
            // fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}));
export default function useTable(records, headers) {
    const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const pages = [5, 10, 15];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    }

    const pageAfterSortAndSelect = () => {
        return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    };

    const TblContainer = (props) => (
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
    );

    return (
        {
            page,
            rowsPerPage,
            pages,
            TblContainer,
            handleChangePage,
            handleChangeRowsPerPage,
            pageAfterSortAndSelect,

        }
    );
};