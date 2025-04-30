import { useState } from "react";


function EditForm({ todo, editTodo }) {
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        e.preventDefault() //取消事件的預設行為
        editTodo(todo.id, content)
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type='text' placeholder="編輯名稱"
                value={content}
                onChange={(e) => { setContent(e.target.value) }} />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm