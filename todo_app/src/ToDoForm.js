import { useState } from "react";

function ToDoForm({addTask}) {

    const [userInput, setUserInput] = useState('');

    const handleChange = (elem) => {
        setUserInput(elem.currentTarget.value)
    }

    const handleSubmit = (elem) => {
        elem.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    const handleKeyPress = (elem) => {
        if(elem.key === 'Enter'){
            handleSubmit(elem);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='form_style'>
                <input type="text"
                    value={userInput}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress} 
                    placeholder="Введите значение..."/>
                    <button className='btn_del_style'>Добавить</button>
            </form>
        </div>
    );
}

export default ToDoForm;