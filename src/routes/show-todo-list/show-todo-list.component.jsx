import TodoList from "../../components/todo-list/todo-list.component"
import { selectTodosList } from "../../store/todo/todo.selector"
import {useSelector} from 'react-redux'


const ShowTodoList = () => {
    const todos = useSelector(selectTodosList)

    return (
        <div>
            {todos.length !== 0 &&
                <TodoList todos={todos} />
            }
        </div>
    )
}

export default ShowTodoList