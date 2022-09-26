import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { selectTodosList } from "../../store/todo/todo.selector"
import { addTodo } from "../../store/todo/todo.actions"

const InputBox = () => {
    const todos = useSelector(selectTodosList)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const { value } = event.target[0]

        dispatch(addTodo(value.trim().toLowerCase(), todos))
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