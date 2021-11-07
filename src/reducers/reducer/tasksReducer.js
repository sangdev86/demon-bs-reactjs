import { OPENED } from "../../types/ToDoListTypes";

const initialState = {
	opened: false,
};

const taskReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case OPENED:
			return {
				...state,
				opened: payload,
			};

		default:
			return state;
	}
};
export default taskReducer;
