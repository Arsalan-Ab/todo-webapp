import { createContext, useState } from "react";

export const TodoContext = createContext({
    setTodo: () => { },
    todos: []
})

const TodoProvider = (children) => {
    const [todos, setTodo] = useState([])


    const value = {
        todos,
        setTodo
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

