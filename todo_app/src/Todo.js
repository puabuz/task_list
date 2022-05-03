import { useState } from 'react';

function ToDo({ todo, removeTask }) {

    const [taskState, setTaskState] = useState('item-text');
    //'' 

    const taskOver = () => {
        console.log(taskState);
        if (taskState === 'item-text') {
            setTaskState('item-text_strike');
        }
        else {
            setTaskState('item-text');
        }

    }

    return (
        <div key={todo.id} className='item-todo'>
            <span className={taskState}
                onClick={taskOver}>
                {todo.task}
            </span>
            <button className='btn_del_style' onClick={() => {
                removeTask(todo.id);
            }}>X</button>
        </div>
    );
}

export default ToDo;