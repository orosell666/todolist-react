import React, { useState } from "react";

const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [listValue, setListValue] = useState([]);
	const [counterValue, setCounterValue] = useState(0);

	const addToDo = (text) => {
		let NewtoDo = [...listValue, text];
		setListValue(NewtoDo);
	};

	const HandleKey = (event) => {
		if (event.key === "Enter" && inputValue !== " " && inputValue !== "") {
			addToDo(inputValue);
			setCounterValue(counterValue + 1);
			setInputValue("");
		}
	};

	const DeleteItems = (indexItem) => {
		setListValue((prevState) =>
			prevState.filter((text, index) => index !== indexItem)
		);
		setCounterValue(counterValue - 1);
	};

	return (
		<div>
			<div className="input-group mb-3">
				<div className="input-group-prepend"></div>
				<input
					type="text"
					className="form-control"
					placeholder="Add a task"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(event) => setInputValue(event.target.value)}
					onKeyPress={(event) => HandleKey(event)}
					value={inputValue}
				/>
			</div>
			<ul>
				{listValue.map((text, index) => (
					<li key={index} className="list-group-item index">
						{text}
						<button
							className="btn justify-text-end "
							onClick={() => DeleteItems(index)}>
							<i className="fas fa-times float-end" />
						</button>
					</li>
				))}
				<li className="list-group-item float-start border-0">
					{"" +
						(counterValue == 0
							? "Nothign to do, chill then!"
							: counterValue + " still to do...")}
				</li>
			</ul>
		</div>
	);
};

export default ToDoList;
