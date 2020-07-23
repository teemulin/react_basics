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
                        <td> <input type="button" name="Delete" value="Delete" /> </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}