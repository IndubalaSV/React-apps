import TodoInput from './components/TodoInput';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  function persistData(data) {
    localStorage.setItem('todos', JSON.stringify(data));
  }
  useEffect(() => {
    let data = localStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);
  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
    persistData([...todos, todo]);
  }
  function handleDeleteTodo(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    persistData(newTodos);
  }
  function handleEditTodo(index) {
    let wrongTodo = todos[index];
    setTodoValue(wrongTodo);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <ToDoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App;
