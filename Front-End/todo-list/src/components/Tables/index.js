import React,{useState} from "react";
import api from "../../server/instance";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import Done from '@material-ui/icons/Done';
import Undo from '@material-ui/icons/Undo';
import { Tooltip } from "@mui/material";

function Tables(props) {
    const [task, setTask] = useState({
        id : 0,
        title : '', 
        status : ''
    });

    const [open, setOpen] = useState(false);
    const [open_dialog, setOpenDialog] = useState(false);
    const [open_delete, setOpenDelete] = useState(false);

    function handleInputTask(event) {
        const inputTask = {
            id : task.id,
            title : event.target.value, 
            status : task.status
        };
        setTask(inputTask);
    }

    function handleClickOpen(row) {
        const inputTask = {
            id : row.id,
            title : row.title, 
            status : row.status
        };
        setTask(inputTask);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    function handleClickStatus(row) {
        const statusTask = {
            id : row.id,
            title : row.title, 
            status : row.status === "Pending" ? "Done" : "Pending"
        };
        setTask(statusTask);
        setOpenDialog(true);
    };
    
    function handleClickDelete(row) {
        const deleteTask = {
            id : row.id,
            title : row.title, 
            status : row.status
        };
        setTask(deleteTask);
        setOpenDelete(true);
    };

    async function addItem(event) {
        event.preventDefault();

        if (task) {
            const response = await api.put(`/tasks/${task.id}`, task);
                    
            if (response) {
                window.location.reload();
                setOpen(false);
                console.log('response ok');
            } 

            setTask({
                id : 0,
                title : '', 
                status : 'Pending'
            });
        }
    }

    async function deleteItem(event) {
        event.preventDefault();

        if (task) {
            const response = await api.delete(`/tasks/${task.id}`, task);

            if (response) {
                window.location.reload();
                setOpen(false);
            } 

            setTask({
                id : 0,
                title : '', 
                status : 'Pending'
            });
        }
    }

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
                                    align={headCell.numeric ? 'center' : 'left'}
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
                                <TableCell align="center">
                                    <Chip label={row.status} color={row.status === 'Done' ? 'success' : 'error'} />
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title="Edit this Task">
                                        <IconButton aria-label="edit" onClick={() => handleClickOpen(row)}>
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={row.status === "Done" ? "Undone Task" : "Done Task"}>
                                        <IconButton aria-label="status" onClick={() => handleClickStatus(row)}>
                                            {(() => {
                                                switch (row.status) {
                                                case "Pending":   return <Done />;
                                                case "Done": return <Undo />;
                                                default:      return <Undo />;
                                                }
                                            })()}
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="delete" onClick={() => handleClickDelete(row)}>
                                            <DeleteForever />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editing Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={handleInputTask}
                        value={task.title}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addItem}>Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open_dialog} onClose={handleCloseDialog}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={addItem}>Yes</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open_delete} onClose={handleCloseDelete}>
                <DialogTitle>Do you really want to delete this task?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDelete}>Cancel</Button>
                    <Button onClick={deleteItem}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Tables;