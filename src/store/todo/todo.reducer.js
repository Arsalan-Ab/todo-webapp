import TODO_ACTION_TYPES from "./todo.types"

const INITIAL_STATE = {
    todos: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return {
                ...state,
                todos: payload
            }
        default:
            return state
    }
}

export default todoReducer