import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';
const List = ({ todos }) => {
    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFileredData = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };
    const filteredTodos = getFileredData();

    return (
        <div className="List">
            <h2>Todo List 🌱🌱🌱</h2>
            <input value={search} onChange={onChangeSearch} placeholder="Enter the keyword" />
            <div className="Todolist_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};
export default List;
