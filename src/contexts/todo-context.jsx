import { createContext, useState } from "react";

export const todoContext = createContext({
    setTodo: () => { },
    todos: []
})

export const TodoProvider = ({children}) => {
    const [todos, setTodo] = useState([])


    const value = {
        setTodo,
        todos
    }

    return <todoContext.Provider value={value}>{children}</todoContext.Provider>
}

