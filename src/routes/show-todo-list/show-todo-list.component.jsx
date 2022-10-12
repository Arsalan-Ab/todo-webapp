import TodoList from "../../components/todo-list/todo-list.component"
import { selectTodosList } from "../../store/todo/todo.selector"
import { useSelector } from 'react-redux'


const ShowTodoList = () => {
    const todos = useSelector(selectTodosList)

    return (
        <div className="container-fluid-lg h-100 d-flex flex-column align-items-center">
            <h1 className="mb-4">Todo List</h1>
            {todos.length !== 0 &&
                <TodoList todos={todos} />
            }
        </div>
    )
}

export default ShowTodoList