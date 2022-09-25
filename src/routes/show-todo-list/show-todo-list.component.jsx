import { useContext } from "react"
import { todoContext } from "../../contexts/todo-context"
import TodoList from "../../components/todo-list/todo-list.component"

const ShowTodoList = ()=> {
    const todos = useContext(todoContext)

    return(
        <TodoList todos={todos}/>
    )
}

export default ShowTodoList