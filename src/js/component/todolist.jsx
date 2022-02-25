import React, { useState } from "react";

const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [listValue, setListValue] = useState([]);
	const [counterValue, setCounterValue] = useState(0);

	const addToDo = (content) => {
		let NewtoDo = [...listValue, content];
		setListValue(NewtoDo);
	};

	const HandleKey = (event) => {
		if (event.key === "Enter" && inputValue !== " " && inputValue !== "") {
			addToDo(listValue);
			setCounterValue(counterValue + 1);
			setInputValue("");
		}
	};

	const DeleteItems = (indexItem) => {
		setListValue((prevState) =>
			prevState.filter((content, index) => index !== indexItem)
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
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(event) => setInputValue(event.target.value)}
					onKeyPress={(event) => HandleKey(event)}
					value={inputValue}
				/>
			</div>
			<ul>
				{listValue.map((content, index) => (
					<li key={index} className="list-group-item index">
						{content}
						<button
							className="btn justify-content-end "
							onClick={() => DeleteItems(index)}>
							<i className="fas fa-times" />
						</button>
					</li>
				))}
				<li className="list-group-item">
					{"" +
						(counterValue == 0
							? "No tasks, add a task"
							: counterValue + " items left")}
				</li>
			</ul>
		</div>
	);
};

export default ToDoList;
