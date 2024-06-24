import ToDoForm from "./components/todo/ToDoForm";
import ToDoList from "./components/todo/ToDoList";
import ToDoProvider from "./context/ToDoProvider";

function App() {
	return (
		<ToDoProvider>
			<div>
				<ToDoForm />
				<ToDoList/>
			</div>
		</ToDoProvider>
	);
}

export default App;
