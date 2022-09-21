import TodoItem from "../todo-item/todo-item.component"

const TodoList = ({todos})=> {
    return(
        <div>
            {
                todos.map((todo)=> (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}

export default TodoList