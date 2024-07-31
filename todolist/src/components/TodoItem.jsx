import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, updateTodo, deleteTodo }) => {
    const onChangeCheckbox = () => {
        updateTodo(id);
    };

    const onClickDeleteButton = () => {
        deleteTodo(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>Delete</button>
        </div>
    );
};

export default TodoItem;
