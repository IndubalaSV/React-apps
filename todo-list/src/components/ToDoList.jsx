import TodoCard from './TodoCard';

function ToDoList(props) {
  let { todos } = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, index) => (
          <TodoCard {...props} index = {index} todo={todo} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;