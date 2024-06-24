import React from "react";

class CounterWithClass extends React.Component {
	constructor() {
		super(0);
		this.state = {
			count: 0,
		};
	}
	render() {
		console.log(this);
		const { count }: any = this.state;
		return (
			<button onClick={() => this.setState({ count: count + 1 })}>
				{count}
			</button>
		);
	}
}
export default CounterWithClass;
