
import { useState } from "react";


function CreateForm({ addTodo }) {

    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() //取消事件的預設行為
        if (!content.trim()) {
            setError(' !!輸入框請勿空白!! ');
            return; // 如果是空白，停止提交
        }
        addTodo(content)
        setContent('')
    }

    return (
        <div>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form className="create-form" onSubmit={handleSubmit}>
                <input type='text' placeholder="輸入待辦事項"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value); setError(''); // 清除錯誤訊息
                    }} />
                <button type="submit">加入</button>
            </form>
        </div>
    )
}

export default CreateForm;