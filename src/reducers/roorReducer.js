import { combineReducers } from "redux";
import infomations from "./reducer/infomations";
import chatsReducer from "./reducer/chatsReducer";
import userReducer from "./reducer/userReducer";
import toDoList from "./reducer/toDoList";
import tasksReducer from "./reducer/tasksReducer";

const rootReducer = combineReducers({
	infomations,
	chatsReducer,
	userReducer,
	toDoList,
	tasksReducer,
});

export default rootReducer;
