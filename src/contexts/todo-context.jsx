import { createContext, useState } from "react";

export const addUserTodo = (title, todos) => {
    const exsistingTodo = todos.find((todo) => {
        return todo.title === title
    })
    if (exsistingTodo === undefined) {
        const id = Math.floor(Math.random() * 100)

        const newTodo = {
            title: title,
            id: id
        }

        return [...todos,newTodo]
    }

    alert('you cant have todo with same title')
    return [...todos]
}

export const todoContext = createContext({
    setTodo: () => { },
    addTodo: () => { }
})

export const TodoProvider = ({ children }) => {
    const [todos, setTodo] = useState([])

    const addTodo = (title) => setTodo(addUserTodo(title, todos))

    const value = {
        setTodo,
        addTodo,
        todos
    }

    return <todoContext.Provider value={value}>{children}</todoContext.Provider>
}

