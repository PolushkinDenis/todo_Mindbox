import { useSelect } from '@mui/base'
import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TodoActionType } from '../../store/reducers/todoReducer';

import './TodoList.css'
import { ITodo } from '../../types/todo';

interface ITodoList {
    todos: ITodo[]
}

const TodoList: FC<ITodoList> = ({ todos }) => {
    const dispatch = useDispatch()

    const [filters, setFilter] = useState(todos)

    const countActiveTodo = todos.filter(todo => todo.completed === false).length

    const allTodos = () => {
        setFilter(todos)
    }
    const activeTodos = () => {
        const activeTodos = todos.filter(todo => todo.completed === false)
        console.log(activeTodos)
        setFilter(activeTodos)
    }
    const completedTodos = () => {
        const activeTodos = todos.filter(todo => todo.completed === true)
        console.log(activeTodos)
        setFilter(activeTodos)
    }
    const deleteCompeledTodos = () => {
        dispatch({type: TodoActionType.DELETE_COMPLETE_TODO}) 
    }

    useEffect(() => {
        allTodos()
    }, [todos])

    return (
        <div className='todo-list'>
            {filters.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
            <div className='filters'>
                <Typography variant="h6" className='filters-lost'>Осталось дел: {countActiveTodo}</Typography>
                <div>
                    <Button variant="outlined" onClick={allTodos}>Все</Button>
                    <Button variant="outlined" onClick={activeTodos}>Активные</Button>
                    <Button variant="outlined" onClick={completedTodos}>Завершенные</Button>
                </div>
                <Button variant="outlined" size="small" onClick={deleteCompeledTodos}>Удалить завершенные</Button>
            </div>
        </div>
    )
}

export default React.memo(TodoList)