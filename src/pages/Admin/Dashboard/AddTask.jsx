import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTaskAction, checkTaskAction, deleteTaskAction} from '../../../reducers/Actions/ToDoListActions'

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow: false,
            valueTask:'',
        }
    }
    handleChange=(e)=>{
        this.setState({valueTask: e.target.value})
    }
    addNewTask=()=>{
        let {valueTask}=this.state;
        let newTask={
            id:Date.now(),
            content:valueTask,
            active: 'inactive',
        };
        this.props.dispatch(addTaskAction(newTask));
        this.setState({valueTask:''})
    }
    activeTask=(task)=>{
        let taskUpdate = task;
        taskUpdate.active = taskUpdate.active === 'active' ? 'inactive' : 'active';
        this.props.dispatch(checkTaskAction(taskUpdate))
    }
    deleteTask=(id)=>{
        this.props.dispatch(deleteTaskAction(id))
    }
    render() {
        let {tasks} = this.props;
        return (
            <div className="col-md-6">
                <div className="card task-panel">
                    <div className="card-header bg-white">
                        <div className="float-left">
                            <div className="add-task-btn-wrapper" onClick={()=>{
                                this.setState({isShow:true})
                            }}>
                                <span className="add-task-btn btn btn-white btn-sm">Add Task</span>
                            </div>
                        </div>
                        <ul className="nav float-right custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Pending Tasks</a>
                                    <a className="dropdown-item" href="#">Completed Tasks</a>
                                    <a className="dropdown-item" href="#">All Tasks</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="task-wrapper">
                            <div className="task-list-container">
                                <div className="task-list-body">
                                    <ul id="task-list">
                                        {
                                            tasks && tasks.map((task,index)=>{
                                                return(
                                                    <li key={index} className={task && task.active === 'active' ? "task completed" : "task" }>
                                                        <div className="task-container">
                                                            <span className="task-action-btn task-check">
                                                                <span onClick={() => this.activeTask(task)} className="action-circle large complete-btn" title={task && task.active ==='active' ? "Mark Incomplete" : "Mark Complete"}>
                                                                    <i className="material-icons">check</i>
                                                                </span>
                                                            </span>
                                                            <span className="task-label">{task.content}</span>
                                                            <span className="task-action-btn task-btn-right">
                                                                <span className="action-circle large" title="Assign">
                                                                    <i className="material-icons">person_add</i>
                                                                </span>
                                                                <span onClick={() => this.deleteTask(task.id)} className="action-circle large delete-btn" title="Delete Task">
                                                                    <i className="material-icons">delete</i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="task-list-footer">
                                    <div className={this.state.isShow ? "new-task-wrapper visible" :"new-task-wrapper"}>
                                        <textarea name="task" onChange={this.handleChange} id="new-task" value={this.state.valueTask} placeholder="Enter new task here. . ." />
                                        <span className="error-message hidden">You need to enter a task first</span>
                                        <span onClick={this.addNewTask} className="add-new-task-btn btn" id="add-task">Add Task</span>
                                        <span onClick={()=>{
                                            this.setState({isShow:false});
                                        }} className="cancel-btn btn" id="close-task-panel">Close</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.toDoList.tasks,
    }
}
export default connect(mapStateToProps)(AddTask);