function TodoCard(props) {
    let { todo, index, handleDeleteTodo, handleEditTodo } = props;
    return (
        <li className="todoItem" key={index}>
            <p>{todo}</p>
            <div className="actionsContainer">
                <i className="fa-regular fa-pen-to-square" onClick={() => handleEditTodo(index)}></i>
                <i className="fa-regular fa-trash-can" onClick={() => handleDeleteTodo(index)}></i>
            </div>
        </li>
    )
}
export default TodoCard;