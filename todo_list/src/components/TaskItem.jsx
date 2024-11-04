import React from 'react';

const TaskItem = ({ task, removeTask, toggleTaskCompletion }) => {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;

