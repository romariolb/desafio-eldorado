import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import api from "../../server/instance";

function Form(props) {
    const [task, setTask] = useState({
        title : '', 
        status : 'Pending'
    });

    function handleInputTask(event) {
        const inputTask = {
            title : event.target.value, 
            status : 'Pending'
        };
        setTask(inputTask);
    }

    async function addItem(event) {
        event.preventDefault();
    
        if (task) {
            api.post("/tasks", task).then((response) => {
                props.onAddItem(task);
            });

            setTask({
                title : '', 
                status : 'Pending'
            });
        }
    }

    return (
        <form>
            <Box
                sx={{
                    width: 650,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth className="App-input" label="Add a New Task" variant="filled" onChange={handleInputTask} value={task.title} />
            </Box>
            <Box
                sx={{
                    width: 650,
                    maxWidth: '100%',
                }}
                className="App-button"
            >
                <Button variant="contained" color="success" onClick={addItem}>Add</Button>
            </Box>
        </form>
    )
}

export default Form;