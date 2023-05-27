import { Fragment, useEffect, useState } from "react";
import TodoItem from "../Todo-Item/todo-item.component";

const TodoList = ({ filteredTodoDatabase, setFilteredTodoFunc }) => {

    const onDeleteClicked = event => {
        const clickedTodoElementId = +event.target.parentElement.parentElement.id;
        
        const newfilteredTodoDatabase = filteredTodoDatabase.filter(todo => {
            return todo.id !== clickedTodoElementId;
        })

        setFilteredTodoFunc(newfilteredTodoDatabase);
    }

    const onEditClicked = event => {
        const clickedTodoElementEl = event.target.parentElement.parentElement;
        
        const newEditedTodoDatabase = filteredTodoDatabase.map(todo => {
            if (todo.id == +clickedTodoElementEl.id) {
                return {
                    ...todo,                    
                    edited: !todo.edited,
                    txt: clickedTodoElementEl.childNodes[0].textContent 
                }
            } else {
                return todo;
            }
        });

        setFilteredTodoFunc(newEditedTodoDatabase);
    }

    const onCompletedClicked = event => {
        const clickedTodoElementId = +event.target.parentElement.parentElement.id;

        const newCompletedTodoDatabase = filteredTodoDatabase.map(todo => {
            if (todo.id == clickedTodoElementId) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        })

        setFilteredTodoFunc(newCompletedTodoDatabase);
        console.log(filteredTodoDatabase);
    }
    
    return (
        <ul className="mt-4 overflow-y-scroll h-72">
            {filteredTodoDatabase.map(todo => {
                return <TodoItem key={todo.id}
                    todo={todo}
                    onClickedHandler=
                    {
                        {
                            onDeleteClicked,
                            onEditClicked,
                            onCompletedClicked
                        }
                    } 
                />
            })}
        </ul>
    );
}

export default TodoList;