import React from "react";
import ToDoList from "./todolist.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="justify-content-center">
			<div>
				<h1>To Do List</h1>
			</div>

			<div>
				<ToDoList />
			</div>
		</div>
	);
};

export default Home;
