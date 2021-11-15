import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import Item from './components/Item';
import Tables from './components/Tables';
import './App.css';
import api from './server/instance';

// const api = axios.create({
//     baseURL: "/api"
// });

function Todo() {
    GetTasks();

    const [itemList, setItemList] = useState([]);

    function GetTasks() {
        useEffect(() => {
            api.get("/tasks").then((response) => {
                setItemList(response.data);
            });
                
        }, []);
    }

    function onAddItem(newItem) {
        const item = new Item(newItem);
    
        setItemList([...itemList, item]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p className="App-title">
                    To Do List
                </p>
                <Form onAddItem={onAddItem}/>
                <Tables itemList={itemList} GetTasks={GetTasks}/>
            </header>
            
        </div>
    );
}

export default Todo;