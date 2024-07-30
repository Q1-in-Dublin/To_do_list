import './App.css';
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

function App() {
    const mockData = [
        { id: 0, isDone: false, content: 'Study React', date: new Date().getTime() },
        { id: 1, isDone: false, content: 'Study Report', date: new Date().getTime() },
        { id: 2, isDone: false, content: 'Study Next.js', date: new Date().getTime() },
    ];

    const [todos, setTodos] = useState(mockData); // mockData를 직접 useState에 할당
    const idRef = useRef(3);

    const createTodo = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false, // idDone 오타 수정
            content: content,
            date: new Date().getTime(),
        };
        setTodos([...todos, newTodo]); // 기존 todos 배열에 새 todo를 추가
    };

    return (
        <div className="App">
            <Header />
            <Editor createTodo={createTodo} />
            <List todos={todos} />
        </div>
    );
}

export default App;
