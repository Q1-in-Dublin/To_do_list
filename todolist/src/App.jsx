import './App.css';
import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [todos, setTodos] = useState([]);

    const idRef = useRef(0);

    useEffect(() => {
        const savedTodos = localStorage.getItem(selectedDate);
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
            const lastId = JSON.parse(savedTodos).reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
            idRef.current = lastId + 1;
        } else {
            setTodos([]);
        }
    }, [selectedDate]);

    useEffect(() => {
        localStorage.setItem(selectedDate, JSON.stringify(todos));
    }, [todos, selectedDate]);

    const createTodo = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: selectedDate,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (targetId) => {
        setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const deleteTodo = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    const changeDate = (offset) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + offset);
        setSelectedDate(newDate.toDateString());
    };

    return (
        <div className="App">
            <Header selectedDate={selectedDate} changeDate={changeDate} />
            <Editor createTodo={createTodo} />
            <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
