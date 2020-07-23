import React from 'react';

export default function Todoform(props) {

    return (
        <div>
            <form onSubmit={props.addToDo}>
                Description: <input type="text" name="desc" value={props.todo.desc} onChange={props.inputChanged} />
                Date: <input type="date" name="date" value={props.todo.date} onChange={props.inputChanged} />
                <input type="submit" id="add" value="Add" />
            </form>
        </div>
    );
}