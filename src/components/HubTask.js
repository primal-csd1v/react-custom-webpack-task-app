import React from "react";
import {OldTask} from "./OldTask";


export class HubTask extends React.Component {

    state = {
	clearStatus: false,
	cloneProps: this.props.data,
    }


    handleClear = () => {
	this.setState({clearStatus: true});
	setTimeout( () => {
	    this.setState({clearStatus: false});
	},200);
    }

    render() {

	let taskTemplate;

	if(this.props.data.length){

	    taskTemplate = this.props.data.map( (item, index) => {
		return <OldTask key ={item.id} data = {item} index = {index} middleManFunc={this.props.middleManFunc} />
	    })
	} else{
	    taskTemplate = <h3 className="blue-text">no tasks</h3>
	}

	if (this.state.clearStatus){
	    this.props.data.length = 0;
	    taskTemplate = <h3 className="blue-text">no tasks</h3>
	}


	return (
	    <div >
		<hr/>
		{this.props.data.length ? <strong className="blue-text">total tasks: {this.props.data.length} | <a href="#" onClick={this.handleClear} > Clear Board </a></strong> : null}
		<hr/>
		{taskTemplate}

	    </div>
	)
    }
}