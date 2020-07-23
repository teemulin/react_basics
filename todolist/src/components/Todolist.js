import React from 'react';

export default function Todolist(props) {
    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>

                    {props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td><input type="button" id="delete" name="Delete" value="Delete" onClick={() => {props.doDelete(index);}} /> </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}