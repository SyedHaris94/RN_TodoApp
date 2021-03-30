import React, { useEffect, useState, useContext, createContext } from 'react';
import { getTodo, createTodo, deleteTodo, updateTodo } from '../../api/todos';

export const TaskContext = createContext(null);
export const useTask = () => useContext(TaskContext);

export const TodoProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTodoTasks()
    }, []);

    // Get Todo Tasks List
    const getTodoTasks = async () => {
        try {
            const res = await getTodo()
            if (res && res.data && res.data.tasks) {
                setTasks(res.data.tasks)
            }
        } catch (err) {
            console.log("err", err)
        }

    }
    // Create Todo Tasks
    const handleCreateTodoTask = async (payload, navigate) => {
        try {
            const res = await createTodo(payload)
            if (res) {
                getTodoTasks()
                navigate()
            }
        } catch (err) {
            console.log('error', err)
        }
    }

    // Update Todo Tasks
    const handleUpdateTodos = async (value) => {
        try {
            const obj = {
                description: value.description,
                status: value.status === 'completed' ? 'inprogress' : 'completed',
                due_at: value.due_at
            }
            const res = await updateTodo({ id: value.id, obj })
            if (res) {
                const updateTask = tasks.map((item) => {
                    if (item.id === value.id) {
                        item.status = value.status === 'completed' ? 'inprogress' : 'completed'
                    }
                    return item
                })
                setTasks(updateTask)
            }
        } catch (err) {
            console.log('error', err)
        }

    }

    // Delete Todo Tasks
    const handleDeleteTodoTask = async (id) => {
        try {
            const response = await deleteTodo(id)
            if (response.data) {
                const remainingTask = tasks.filter((item) => item.id !== id)
                setTasks(remainingTask)
            }

        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <TaskContext.Provider
            value={{
                handleCreateTodoTask,
                handleDeleteTodoTask,
                handleUpdateTodos,
                tasks: tasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}