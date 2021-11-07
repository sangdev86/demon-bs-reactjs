import { ADD_TASK, CHECK_TASK, DELETE_TASK, } from "../../types/ToDoListTypes";

const initialState = {
    tasks: [{
            id: 1,
            content: 'Patient appointment booking',
            active: 'inactive',
        },
        {
            id: 2,
            content: 'Appointment booking with payment gateway',
            active: 'inactive',
        },
        {
            id: 3,
            content: 'Doctor available module',
            active: 'active',
        },
        {
            id: 4,
            content: 'Patient and Doctor video conferencing',
            active: 'inactive',
        },
        {
            id: 5,
            content: 'Private chat module',
            active: 'inactive',
        },
        {
            id: 6,
            content: '	Patient Profile add',
            active: 'inactive',
        },
    ]

}
const toDoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:{
            let {newTask}=action;
            if(newTask.content.trim()===''){
                return {...state}
            }
            let tasksUpdate= [...state.tasks];
            let index=tasksUpdate.findIndex(task=>task.content===newTask.content);
            if(index=== -1){
                state.tasks = [...tasksUpdate,newTask];
            }
        break;
        }
        case CHECK_TASK:{
            let tasksUpdate =[...state.tasks]
            let {task}=action;
            let index = tasksUpdate.findIndex(tk=>tk.id===task.id);
            if(index !== -1) {
                tasksUpdate[index] = task;
            }
            state.tasks = tasksUpdate;
            break;
        }
        case DELETE_TASK: {
            let tasksUpdate = [...state.tasks]
            tasksUpdate = tasksUpdate.filter(task => task.id !== action.id);
            state.tasks = tasksUpdate;
            break;
        }
        default:
            break;
    }
    return {
        ...state
    };
}
export default toDoList;