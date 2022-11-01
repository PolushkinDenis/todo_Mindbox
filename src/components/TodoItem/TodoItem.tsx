import React, { FC } from 'react'
import { ITodo } from '../../types/todo'
import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { TodoActionType } from '../../store/reducers/todoReducer';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITodoItem {
    todo: ITodo
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
    const dispatch = useDispatch()

    const chachgeComlete = () => {
        dispatch({ type: TodoActionType.COMPLETE_TODO, payload: todo.id })
    }
    const deleteTodo = () => {
        dispatch({ type: TodoActionType.DELETE_TODO, payload: todo.id })
    }

    return (
        <div className='todo-item'>
            <Checkbox
                checked={todo.completed}
                onChange={chachgeComlete}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography variant="h6" className={todo.completed ? "completed" : ""}>{todo.title}</Typography>
            <IconButton aria-label="gelete from favorites" onClick={deleteTodo}>
                <DeleteIcon style={{ color: 'red' }} />
            </IconButton>
        </div>
    )
}

export default  React.memo(TodoItem)