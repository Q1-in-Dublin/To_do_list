import { useState, useRef } from 'react';
import './Editor.css';
const Editor = ({ createTodo }) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            onsubmit();
        }
    };
    const onsubmit = () => {
        if (content === '') {
            contentRef.current.focus();
            return;
        }
        createTodo(content);
        setContent('');
    };
    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                type="text"
                placeholder="Enter new Todolist"
            />
            <button onClick={onsubmit}>Add</button>
        </div>
    );
};
export default Editor;
