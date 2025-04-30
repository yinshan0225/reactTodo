import { useState } from "react";
import CreateForm from "./CreactForm"
import Todo from "./Todo";

function TodoWrapper() {

    const [todos, setTodos] = useState([
        { content: '待辦事項', id: Math.random(), isCompleted: false, isEditing: false }
    ]);
    const addTodo = (content) => {
        setTodos([...todos, { content, id: Math.random(), isEditing: false }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }
    //如果todo.id === 傳入的id，回傳新物件{...todo, iscompleted !todo.isCompleted}，反之則回傳原本的todo
    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isEditing: !todo.isEditing } : todo
        }))
    }

    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEditing: false } : todo
        }))
    }

    return (
        < div className="Wrapper" >
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {todos.map((todo) => {
                return <Todo key={todos.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} toggleIsEditing={toggleIsEditing} editTodo={editTodo} />
            })}
        </div >
    )
}

export default TodoWrapper;