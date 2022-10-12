import { selectTodosList } from "../../store/todo/todo.selector"
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, checkedStatus } from '../../store/todo/todo.actions'

const TodoItem = ({ todo }) => {
    const { title, id, checked } = todo
    const todos = useSelector(selectTodosList)
    const dispatch = useDispatch()

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id, todos))
    }

    const handleChecked = () => {
        dispatch(checkedStatus(title, todos))
    }

    return (
        <div className="container-lg bg-light">
            <div className="row justify-content-between border">
                <div className="col-11">
                    <div className="form-check">
                        <input onChange={handleChecked} type="checkbox" className="form-check-input col-5" checked={checked} />
                        <label className="form-check-label">{title}</label>
                    </div>
                </div>
                <button type="button" onClick={handleDeleteTodo} className="btn-close"></button>
            </div>
        </div>
    )
}


export default TodoItem