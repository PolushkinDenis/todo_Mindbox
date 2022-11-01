import { ITodos, ITodo } from "../../types/todo"
import { todoReduser } from "./todoReducer"
import {TodoAction, TodoActionType} from './todoReducer'

describe('todoReducer', () => {
    test('add todo', () => {
        expect(todoReduser({todos:[]}, {type: TodoActionType.ADD_TODO, payload: {id: "1", title: "do it", completed: false}})).toEqual( {"todos":[{id: "1", title: "do it", completed: false}]})
    })
    test('delete todo', () => {
        expect(todoReduser({todos: [{id: "1", title: "do it", completed: false}]}, {type: TodoActionType.DELETE_TODO, payload: '1'})).toEqual( {"todos":[]})
    })
    test('delete complete todos', () => {
        expect(todoReduser({todos: [{id: "1", title: "completed 1", completed: true},
        {id: "2", title: "do it", completed: false},
        {id: "3", title: "completed 2", completed: true}
    ]},
         {type: TodoActionType.DELETE_COMPLETE_TODO})).toEqual( {"todos":[ {id: "2", title: "do it", completed: false}]})
    })
})