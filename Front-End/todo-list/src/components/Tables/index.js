import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
// import DeleteIcon from '@mui/material-ui/icons/Delete';

function Tables(props) {
    const headCells = [
        {
          id: 'Title',
          numeric: false,
          disablePadding: false,
          label: 'Task',
        },
        {
          id: 'status',
          numeric: true,
          disablePadding: false,
          label: 'Status',
        },
        {
          id: 'Actions',
          numeric: true,
          disablePadding: false,
          label: 'Actions',
        },
      ];
    return (
        <div className="App-div">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead className="App-table">
                        <TableRow>
                            {headCells.map((headCell) => (
                                <TableCell
                                    key={headCell.id}
                                    align={headCell.numeric ? 'right' : 'left'}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                >
                                    {headCell.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.itemList.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">
                                    <Chip label={row.status} color={row.status === 'Done' ? 'success' : 'error'} />
                                </TableCell>
                                <TableCell align="right">
                                <IconButton aria-label="delete">
                                    {/* <DeleteIcon /> */}
                                    Text
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tables;