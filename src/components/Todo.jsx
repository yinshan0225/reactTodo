import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";


function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {

    return (
        todo.isEditing ? (<EditForm todo={todo} editTodo={editTodo} />)
            : (<div className={`Todo ${todo.isCompleted ? 'completed' : ''}`}>
                <div className="left">
                    <input className="checkbox" type="checkbox" onClick={() => toggleCompleted(todo.id)} ></input>
                    <p>
                        {todo.content}
                    </p>
                </div>
                <div>
                    <MdEdit onClick={() => { toggleIsEditing(todo.id) }} style={{ cursor: 'pointer', marginRight: '5px' }} />
                    <MdDelete style={{ cursor: 'pointer' }} onClick={() => { deleteTodo(todo.id) }} />
                </div>
            </div>
            )
    )
}

export default Todo