import { useContext } from "react"
import { todoContext } from "../../contexts/todo-context"
import TodoList from "../todo-list/todo-list.component"

const InputBox = () => {

    const { setTodo, todos } = useContext(todoContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, value } = event.target[0]

        const id = Math.floor(Math.random() * 100)

        const todo = {
            title: value,
            id: id
        }
        setTodo([...todos, todo])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addToDo">Add Todo:</label>
                <input id="addToDo" name="add"></input>
                <input type='submit' value='Add'></input>
            </form>

            <TodoList todos={todos}></TodoList>
        </div>
    )
}

export default InputBox