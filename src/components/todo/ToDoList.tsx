import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

function ToDoList() {
	const { state, dispatch } = useContext(ToDoContext);
	console.log("🚀 ~ ToDoList ~ state:", state);
	return (
		<div className="m-10">
			{state.map(item => (
				<div className="">
					<p
						className={`cursor-pointer ${
							item.isCompleted ? "line-through" : ""
						}`}
						onClick={() =>
							dispatch({ type: "taskComplete", payload: item.id })
						}>
						{" "}
						{item.title}
					</p>
				</div>
			))}
		</div>
	);
}

export default ToDoList;
