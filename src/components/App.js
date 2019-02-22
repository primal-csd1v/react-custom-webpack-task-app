import React from "react";
import {HubTask} from "./HubTask";
import {EnterTask} from "./EnterTask";

import '../styles/style.css';


export class App extends React.Component{

    state = {
	data: [],
    }




    handleAddTask = (data) => {
	const taskText = data.prompt;
	let nextTask = [{id:+new Date(),text:taskText}, ...this.state.data];
	this.setState({data : nextTask});
    }



    taskDel = (i) =>{
	let middleManArr = this.state.data;
	middleManArr.splice(i, 1);
	this.setState({
	    data: middleManArr,
	})
    }

    render() {
	// console.log("RENDNER");
	// console.log(this.state.data);
	return (
	    <div>
		<h2 className="h1"> Task board, app on react</h2>
		<EnterTask method={this.handleAddTask}/>
		<br/>
		<HubTask data={this.state.data} middleManFunc = {this.taskDel} />
		<br/>
		<hr/>
		<hr/>
	    </div>
	);
    }
}