import './TodoItem.css';
const TodoItem = ({ id, isDone, content, date }) => {
    return (
        <div className="TodoItem">
            <input readOnly checker={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button>Delete</button>
        </div>
    );
};
export default TodoItem;
