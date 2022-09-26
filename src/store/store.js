import todoReducer from './todo/todo.reducer'

import { legacy_createStore as createStore} from 'redux'

const store = createStore(todoReducer)

export default store
