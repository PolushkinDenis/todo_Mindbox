import React, { FC, useState } from 'react'
import TodoList from '../TodoList/TodoList'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch } from 'react-redux';
import { TodoActionType } from '../../store/reducers/todoReducer';
import './Todo.css'
import { useTypeSelector } from '../../hooks/useTypeSelector';

const Todo: FC = () => {
    const dispatch = useDispatch()
    const todos = useTypeSelector(state => state.todos.todos)

    const [title, setTitle] = useState('')

    const addTodo = () => {
        if(title.length > 0) {
            const todo = {
                id: Date.now(),
                title: title,
                completed: false
            }
            dispatch({ type: TodoActionType.ADD_TODO, payload: todo })
            setTitle('')
        }
    }

    return (
        <div className='content'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid  sx={{ mb: 5 }}>
                    <Typography variant="h1" gutterBottom>
                        Todo
                    </Typography>
                    <TextField id="standard-basic" label="Задание" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} sx={{mr: 2}}/>
                    <Button variant="contained" onClick={addTodo}>Добавить</Button>
                </Grid>
                <TodoList todos={todos}/>
            </Grid>

        </div >
    )
}

export default Todo