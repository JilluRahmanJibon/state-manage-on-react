type TProps = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({ count, setCount }:TProps) => {
	return (
		<div className="border border-red-500 p-10 m-10">
		
			<button onClick={() => setCount(prev => prev + 1)}>Click for update</button>
		</div>
	);
};

export default CounterWithFuncComponent;
