import { createAction } from "../../utils/reducer.util";
import TODO_ACTION_TYPES from "./todo.types";

const addUserTodo = (title, todos) => {
    const exsistingTodo = todos.find((todo) => {
        return todo.title === title
    })
    if (exsistingTodo === undefined) {
        const id = Math.floor(Math.random() * 100)

        const newTodo = {
            title: title,
            id: id
        }

        return [...todos, newTodo]
    }

    alert('you cant have todo with same title')
    return [...todos]
}

export const addTodo = (title, todos) => {
    const newTodos = addUserTodo(title,todos)
    return createAction(TODO_ACTION_TYPES.ADD_TODO, newTodos)
}
