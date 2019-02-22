import React from "react";

export class OldTask extends React.Component{

    state = {
	message: this.props.data.text,
	validate: false,
	validateSave: false
    }

    handleMiddleManFunc = () => {
	this.props.middleManFunc(this.props.index)
    }

    handleChange = (e) => {
	this.setState({
	    message: e.currentTarget.value
	})
    }
    handleValid = (e) =>{
	this.setState({
	    validate: true,
	    validateSave: true
	})
	setTimeout(()=>{document.getElementById(this.props.index).focus();}, 50)

    }
    handleSave = () => {
	this.setState({
	    validate:false,
	    validateSave: false
	})
    }

    render() {

	return (
	    <div className="fragment"  >
		<br/>
		<textarea disabled={this.state.validate? false : true} id={this.props.index} readOnly = {this.state.validate ? false : true} onChange={this.handleChange} className="task__text" value={this.state.message}></textarea>
		<input type="button" onClick={this.handleSave} className="button" value="Save" disabled ={this.state.validateSave ? false : true}/>
		<input type="button" onClick={this.handleValid} className="button" value="Edit"/>
		<input type="button" onClick={this.handleMiddleManFunc}  className="button button-delete" value="Delete"/>
	    </div>
	);
    }
}