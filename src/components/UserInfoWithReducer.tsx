import React, { ChangeEvent, useReducer } from "react";

const initialState = {
	name: "",
	age: "",
	hobbies: [] as string[],
};
type TAction = {
	type: string;
	payload: string;
};

const reducer = (currentState: typeof initialState, action: TAction) => {
	switch (action?.type) {
		case "addName":
			return { ...currentState, name: action.payload };
		case "addAge":
			return { ...currentState, age: action.payload };
		case "addHobby":
			return {
				...currentState,
				hobbies: [...currentState.hobbies, action.payload],
			};
		default:
			return currentState;
	}
};
const UserInfoWithReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	 console.log("🚀 ~ UserInfoWithReducer ~ state:", state)
	 
	 
	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={e => dispatch({ type: "addName", payload: e.target.value })}
				type="text"
				name="name"
				id="name"
				placeholder="name"
			/>
			<input
				onChange={e => dispatch({ type: "addAge", payload: e.target.value })}
				type="number"
				name="age"
				id="age"
				placeholder="age"
			/>
			<input
				onBlur={e => dispatch({ type: "addHobby", payload: e.target.value })}
				type="text"
				name="hobbies"
				id="hobbies"
				placeholder="hobby"
			/>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default UserInfoWithReducer;
