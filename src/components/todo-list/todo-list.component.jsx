import { Fragment } from "react"
import TodoItem from "../todo-item/todo-item.component"

const TodoList = ({todos})=> {
    return(
        <Fragment>
            {
                todos.map((todo)=> (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </Fragment>
    )
}

export default TodoList