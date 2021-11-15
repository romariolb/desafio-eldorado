import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
            const response = await fetch('/api/tasks', {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(task)
            })

            if (response.ok) {
                console.log('response ok');
                props.onAddItem(task);
            } 

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
            {/* <input type="text" placeholder="Add a new Task" onChange={handleInputTask} value={task.title}/> */}
            {/* <button type="submit"  onClick={addItem}>Add</button> */}
        </form>
    )
}

export default Form;