import { OPENED } from "../../types/ToDoListTypes";

export const openedTaskChat = (opened) => ({
	type: OPENED,
	payload: opened,
});
