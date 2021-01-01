import React, {useState} from 'react';
import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {TableCell, TableSortLabel} from "@material-ui/core";

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
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();
    const pages = [5, 10, 15];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    }

    const sort = (array, comparator) => {
        debugger;
        return array.sort((a, b) => {
            let f1 = a[Object.keys(a)[orderBy]];
            let f2 = b[Object.keys(b)[orderBy]];
            let i = 'asc' === order ? -1 : 1;
            return (f1 < f2 ? i : f2 < f1 ? i : 0);
        });
    }
    const getComparator = (order, orderBy) => {

    }
    const recordsAfterPagingAndSorting = () => {
        return sort(records, getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    };

    const handleSortRequest = cellId => {
        /*const isAsc = orderBy === cellId && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(cellId);*/
        if (orderBy === cellId) {
            setOrder(order === 'asc' ? 'desc' : 'asc');
        } else {
            setOrder('desc');
        }
        setOrderBy(cellId);
    };

    const TblContainer = (props) => (
        <Table size={"medium"} className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell align={"left"} key={0}>id</TableCell>
                    {
                        headers.map(header => (
                            <TableCell align={"left"} key={header.id}>
                                <TableSortLabel
                                    active={orderBy === header.id}
                                    direction={orderBy === header.id ? order : 'asc'}
                                    onClick={() => {handleSortRequest(header.id)}}>
                                    {header.title}
                                </TableSortLabel>
                            </TableCell>
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
            recordsAfterPagingAndSorting,

        }
    );
};