import {ITodo, ITodos} from '../../types/todo'

export enum TodoActionType {
    ADD_TODO = "ADD_TODO",
    COMPLETE_TODO = "COMPLETE_TODO",
    DELETE_TODO = "DELETE_TODO",
    DELETE_COMPLETE_TODO = "DELETE_COMPLETE_TODO"
}

interface IAddTodo {
    type: TodoActionType.ADD_TODO,
    payload: ITodo,
}
interface ICompleteTodo {
    type: TodoActionType.COMPLETE_TODO,
    payload: string,
}
interface IDeleteTodo {
    type: TodoActionType.DELETE_TODO,
    payload: string,
}
interface IDeleteCompleteTodo {
    type: TodoActionType.DELETE_COMPLETE_TODO,
}
export type TodoAction = IAddTodo | ICompleteTodo | IDeleteTodo | IDeleteCompleteTodo

const initState: ITodos = {
    todos: []
}


export const todoReduser = (state = initState, action: TodoAction ): ITodos => {
    switch(action.type) {
        case TodoActionType.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TodoActionType.COMPLETE_TODO:
            return {...state, todos: state.todos.map(todos =>
                (todos.id === action.payload)
                    ? { ...todos, completed: !todos.completed }
                    : todos
            )}
        case TodoActionType.DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case TodoActionType.DELETE_COMPLETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.completed !== true)}
        default:
            return state
    }
}