import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todos, updateTodo, deleteTodo }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h2>Todo List 🌱🌱🌱</h2>
            <input value={search} onChange={onChangeSearch} placeholder="Enter the keyword" />
            <div className="Todolist_wrapper">
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default List;
