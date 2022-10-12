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
            id: id,
            checked: false
        }

        return [...todos, newTodo]
    }

    alert('you cant have todo with same title')
    return [...todos]
}

const deleteUserTodo = (id, todos) => {
    return todos.filter((todo) => {
        return todo.id !== id
    })
}

const updateCheck = (title, todos) => {
    const exsistingTodo = todos.find((todo) => {
        return todo.title === title
    })

    exsistingTodo.checked = !exsistingTodo.checked
    return [...todos]
}

export const addTodo = (title, todos) => {
    const newTodos = addUserTodo(title, todos)
    return createAction(TODO_ACTION_TYPES.ADD_TODO, newTodos)
}

export const deleteTodo = (id, todos) => {
    const newTodos = deleteUserTodo(id, todos)
    return createAction(TODO_ACTION_TYPES.DELETE_TODO, newTodos)
}

export const checkedStatus = (title, todos) => {
    const newTodos = updateCheck(title, todos)
    return createAction(TODO_ACTION_TYPES.UPDATE_CHECK_TODO, newTodos)
}
