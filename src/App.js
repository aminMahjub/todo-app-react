import { Fragment, useState, useEffect } from 'react';
import TodoInputTxt from './components/Todo-input-txt/todo-input-txt.component';
import TodoList from './components/TodoList/todo-list.component';

const App = () => {
  const [filteredTodoDatabase, setFilteredTodoDatabase] = useState([]);
  const addNewTodo = todoTxt => {
    setFilteredTodoDatabase([
      ...filteredTodoDatabase,
      {
        id: filteredTodoDatabase.length,
        txt: todoTxt,
        edited: false,
        completed: false
      }
    ]);
  }

  const setFilteredTodoFunc = todoArray => {
    setFilteredTodoDatabase(todoArray);
  } 

  return (
    <main className='mx-auto max-w-lg pl-7'>
      <h1 className='text-2xl mb-5'>Todo App</h1>

      <TodoInputTxt addNewTodo={addNewTodo}/>
      <TodoList filteredTodoDatabase={filteredTodoDatabase} setFilteredTodoFunc={setFilteredTodoFunc} />
    </main>
  );
}

export default App;
