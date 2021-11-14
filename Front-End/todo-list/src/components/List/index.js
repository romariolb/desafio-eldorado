import React from "react";

function List(props) {
    return (
        <ul className="todo-list">
            {props.itemList.map(item => (
                <li key={item.id}>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

export default List;