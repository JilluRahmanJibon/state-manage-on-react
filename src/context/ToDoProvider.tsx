import React, { ReactNode, createContext, useReducer } from "react";

export const ToDoContext = createContext<
	{ state: TToDo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);
type TTodoProviderProps = {
	children: ReactNode;
};

type TToDo = {
	id: string;
	title: string;
	isCompleted: boolean;
};
const initialState: TToDo[] = [];

type TAction = {
	type: "addTodo"|"taskComplete";
	payload: TToDo | string;
};

const typesConstans = {
	ADD_TODO: "addTodo",
	TASK_COMPLETE: "taskComplete",
};
const reducer = (currentState: TToDo[], action: TAction) => {
	switch (action.type) {
		case typesConstans.ADD_TODO:
			return [...currentState, action.payload];
	}
	switch (action.type) {
		case typesConstans.TASK_COMPLETE:
			return currentState.map(item =>
				item.id === action.payload
					? { ...item, isCompleted: !item.isCompleted }
					: item
			);
		default:
			return currentState;
	}
};
const ToDoProvider = ({ children }: TTodoProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const values = {
		state,
		dispatch,
	};
	return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
