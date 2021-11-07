import { ADD_TASK, CHECK_TASK, DELETE_TASK, } from "../../types/ToDoListTypes";

export const addTaskAction = (newTask) => ({
    type: ADD_TASK,
    newTask,
})
export const checkTaskAction = (task) => ({
    type: CHECK_TASK,
    task,
})
export const deleteTaskAction = (id) => ({
    type: DELETE_TASK,
    id
})

