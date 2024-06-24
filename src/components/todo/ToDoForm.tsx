import { FormEvent, useContext, useState } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoForm = () => {
	const { state,dispatch } = useContext(ToDoContext);
	const [task, setTask] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	 
		const todo = {
			id: Math.random().toString(36).substring(2, 7),
			title: task,
			isCompleted: false,
        };
        dispatch({type:'addTodo',payload:todo})
	};
	return (
		<div className="p-10 m-10">
			<h1>Add todo</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="Todo">Task</label>
				<input
					className="border border-red-500"
					type="text"
					name="todo"
					id="todo"
					onBlur={e => setTask(e.target.value)}
				/>
				<button className="btn btn-primary" type="submit">
					Submit{" "}
				</button>
			</form>
		</div>
	);
};

export default ToDoForm;
