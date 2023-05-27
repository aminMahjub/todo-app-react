import { Fragment, useState } from "react";
import './todo-input-txt.css';

const TodoInputTxt = ({ addNewTodo }) => {
    const [todoTxt, setTodoTxt] = useState('');
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
    
    const onChangeTodoTxt = event => {
        setTodoTxt(event.target.value);
    };
       
    const onClickAddTodo = () => {
        addNewTodo(todoTxt)
        setIsAddBtnClicked(true);
    };

    return (
        <div className="add-todo-container">
            <input type="text" 
                onChange={onChangeTodoTxt}
                className="
                    border-2 
                    border-gray-400
                    rounded-lg
                    mr-1
                    pl-2
                    placeholder:text-sm
                    placeholder:text-gray-400
                    
                "
                placeholder="Add todo"
                value={isAddBtnClicked ? '' : todoTxt}
            />
            <button type="button"
                className="
                    bg-sky-400
                    text-white
                    text-sm
                    p-1
                    rounded-lg
                "
                onClick={onClickAddTodo}
            >
                Add
            </button>
        </div>
    );
}

export default TodoInputTxt;