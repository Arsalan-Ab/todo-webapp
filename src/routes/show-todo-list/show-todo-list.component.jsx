import { useContext } from "react"
import { todoContext } from "../../contexts/todo-context"
import TodoList from "../../components/todo-list/todo-list.component"
import { selectTodosList } from "../../store/todo/todo.selector"
import {useSelector} from 'react-redux'

const ShowTodoList = () => {
    //const { todos } = useContext(todoContext)
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