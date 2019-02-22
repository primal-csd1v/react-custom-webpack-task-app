import React from "react";


export class EnterTask extends React.Component{

    state = {
	prompt:'',
	validEnter: false
    }

    handlePrompt = (e) => {
	this.setState({
	    prompt: e.currentTarget.value
	})
    }

    handleAdd = (e) => {
	const { prompt } = this.state
	this.props.method({prompt});
    }
    handleClear = (e) => {
	this.setState({
	    prompt: '',
	})
    }

    render() {
	return (
	    <div className="fragment-enter">
		<div className="buffer">
		    <h4 className="enter-text">Enter your task</h4>
		    <input type="text" className="field" placeholder="                 Here" value={this.state.prompt} onChange={this.handlePrompt}/>
		    <br/>
		    <input type="button" disabled={this.state.prompt.length ? false : true} onClick={this.handleAdd} className="button" value="Enter"/>
		    <input type="button" onClick={this.handleClear} className="button" value="Clear"/>
		</div>
	    </div>
	);
    }
}