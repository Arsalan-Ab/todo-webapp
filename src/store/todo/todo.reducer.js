import TODO_ACTION_TYPES from "./todo.types"

const todoReducer = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return {
                ...state,
                payload
            }
        default:
            return state
    }
}