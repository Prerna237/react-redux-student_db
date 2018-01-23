import React, { Component } from 'react';
import { edit_form, add_student } from '../actions_creators/actionTypes';
import { connect } from 'react-redux';
import { store } from '../index';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';

//This is a component as well as a container
export class InputFields extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = { 'edit_mode_id': [], 'edit_mode_name': [], 'edit_mode_major': [] };
        this.submitButtonHandler = this.submitButtonHandler.bind(this);
        this.edit_mode_toggle = this.edit_mode_toggle.bind(this);
        this.handleChange_id = this.handleChange_id.bind(this);
        this.handleChange_major = this.handleChange_major.bind(this);
        this.handleChange_name = this.handleChange_name.bind(this);
    }

    edit_mode_toggle(arr) {
        debugger;
        this.setState({ 'edit_mode_id': arr[0], 'edit_mode_name': arr[1], 'edit_mode_major': arr[2] });
        delete store.getState().data[arr[0]];
        debugger;
        return;
    }
    componentDidUpdate(prevProps, prevState) {
        debugger;
    }


    //this button need to call the action creator
    submitButtonHandler() {

        var arr = [this.refs.in_roll.value, this.refs.in_name.value, this.refs.in_major.value]
        this.setState({ 'edit_mode_name': '' });
        this.setState({ 'edit_mode_id': '' });
        this.setState({ 'edit_mode_major': '' });
        debugger;
        this.props.onButtonClick(arr, this.edit_mode_toggle);
    }
    handleChange_id(event) {
        this.setState({ 'edit_mode_id': event.target.value });
    }
    handleChange_name(event) {
        this.setState({ 'edit_mode_name': event.target.value });
    }
    handleChange_major(event) {
        this.setState({ 'edit_mode_major': event.target.value });
    }
    render() {
        debugger;
        if (this.state.edit_mode === []) {
            return (

                <div id="app-input-fields">
                    Enter the Student's ID
            <input type="text" ref="in_roll" />
                    <br />
                    Enter the Student's Name
            <input type="text" ref="in_name" />
                    <br />
                    Enter the Student's Major
            <input type="text" ref="in_major" />
                    <br />
                    <input type='button' value='Submit' onClick={this.submitButtonHandler} />
                </div>

            );

        }
        else {
            return (
                <div id="app-input-fields">
                    Enter the Student's ID
<input type="text" ref="in_roll" value={this.state.edit_mode_id} onChange={this.handleChange_id} />
                    <br />
                    Enter the Student's Name
<input type="text" ref="in_name" value={this.state.edit_mode_name} onChange={this.handleChange_name} />
                    <br />
                    Enter the Student's Major
<input type="text" ref="in_major" value={this.state.edit_mode_major} onChange={this.handleChange_major} />
                    <br />
                    <input type='button' value='Submit' onClick={this.submitButtonHandler} />
                </div>);
        }
    }
}

//mapping for the InputFields component
export const mapStatetoInputFieldsProps = (state) => {
    debugger;
    //need to modify this soo that when a list item is clicked, its fields are populated in the text boxes
    return { incoming: state.data }
}

//mapping for the InputFields component
//addStudent is an action-creator
export const mapDispatchToInputFieldsProps = (dispatch) => {
    debugger;
    return {
        onButtonClick: (arr, toggle_function) => {
            dispatch(add_student(arr, toggle_function))
        }
    }
}

export const InputConnectedComponent = connect(mapStatetoInputFieldsProps, mapDispatchToInputFieldsProps)(InputFields);

//mapping for the List Div component
export const mapStatetoListDivProps = (state) => {
    debugger;
    return { incoming: state.data }
}

//mapping for the List Div component
//editForm is an action-creator
export const mapDispatchToListDivProps = (dispatch) => {
    return {
        onListTupleClick: (id) => {
            debugger;
            dispatch(edit_form(id));
        }
    }
}


export class ListDiv extends Component {
    render() {
        var incoming_data = this.props.incoming;
        debugger;
        return (
            Object.keys(incoming_data).map(
                (elem, index) => {
                    return (<ListTuple key={index} id={elem} array={incoming_data[elem]} handler={this.props.onListTupleClick} />);
                })

        );
    }
}
// this.props.onListTupleClick({ elem })
class ListTuple extends Component {
    constructor(props) {
        super(props);
        console.log('Created a ListTuple');
    }

    // this.props.handler(this.props.id)
    render() {
        debugger;
        return (
            <div className="list-tuple" onClick={() => {
                debugger; this.props.array[2]([this.props.id, this.props.array[0], this.props.array[1]])
            }}>
                {this.props.id} ====> {this.props.array[0]} and has a major in {this.props.array[1]}
            </ div >
        );
    }
}


export const ListConnectedComponent = connect(mapStatetoListDivProps, mapDispatchToListDivProps)(ListDiv);

