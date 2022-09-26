import { useContext } from "react"
import { todoContext } from "../../contexts/todo-context"
import { Link } from "react-router-dom"

const InputBox = () => {

    const { setTodo, addTodo } = useContext(todoContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, value } = event.target[0]

        addTodo(value.trim().toLowerCase())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addToDo">Add Todo:</label>
                <input required id="addToDo" name="add"></input>
                <input type='submit' value='Add'></input>
            </form>

            <Link to='show-todo-list'>
                <button>show todos list</button>
            </Link>
        </div>
    )
}

export default InputBox