import { useContext } from "react"
import { todoContext } from "../../contexts/todo-context"
import TodoList from "../../components/todo-list/todo-list.component"

const ShowTodoList = () => {
    const { todos } = useContext(todoContext)

    return (
        <div>
            {todos.length !== 0 &&
                <TodoList todos={todos} />
            }
        </div>
    )
}

export default ShowTodoList