import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import Item from './components/Item';
import Tables from './components/Tables';
import './App.css';

function Todo() {
    useEffect(() => {
        fetch('/api/tasks').then(response => 
            response.json().then(data => {
                setItemList(data);
            }))
    }, []);

    const [itemList, setItemList] = useState([]);

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
                <Tables itemList={itemList} />
            </header>
            
        </div>
    );
}

export default Todo;