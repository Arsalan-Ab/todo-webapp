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
        <div className="d-flex flex-column">
                <form onSubmit={handleSubmit} className="border mb-5 bg-light d-flex flex-column p-2">
                    <div className="mb-3">
                        <label htmlFor="addToDo" className="form-label">Add Todo</label>
                        <input className="form-control" required id="addToDo" name="add" placeholder="Enter Todo" ></input>
                    </div>
                    <button className="btn btn-primary mb-1 align-self-center" type='submit' value='Add'>Submit</button>
                </form>

            <Link to='show-todo-list' className="align-self-center btn btn-danger">
                show todos list
            </Link>
        </div>
    )
}

export default InputBox