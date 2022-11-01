import { todoReduser } from "./todoReducer";
import {combineReducers} from 'redux'

export const RootReducer = combineReducers({
    todos: todoReduser
})

export type RootReducer = ReturnType<typeof RootReducer>