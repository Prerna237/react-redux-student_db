import React, { Component } from 'react';
import { edit_form, add_student } from '../actions_creators/actionTypes';
import { connect } from 'react-redux';
// import { InputFields, mapStatetoListDivProps } from './component';

//This is a component as well as a container
export class InputFields extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.submitButtonHandler = this.submitButtonHandler.bind(this);
    }

    //this button need to call the action creator
    submitButtonHandler() {

        var arr = [this.refs.in_roll.value, this.refs.in_name.value, this.refs.in_major.value]
        debugger;
        this.props.onButtonClick(arr);
    }

    render() {
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
        onButtonClick: arr => {
            dispatch(add_student(arr))
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
            dispatch(edit_form(id))
        }
    }
}


export class ListDiv extends Component {
    //Somewhere here i need to call the getSTore function
    render() {
        var incoming_data = this.props.incoming;
        debugger;
        return (
            Object.keys(incoming_data).map(
                (elem, index) => {
                    return (<ListTuple key={index} id={elem} array={incoming_data[elem]} onClick={this.props.onListTupleClick} />);
                })

        );
    }
}

class ListTuple extends Component {
    constructor(props) {
        super(props);
        console.log('Created a ListTuple');
    }
    // onClick={this.props.onListTupleClick(this.props.id)} 
    render() {
        debugger;
        return (
            <div class="list-tuple" >
                {this.props.id}====>{this.props.array[0]} and has a major in {this.props.array[1]}
            </ div>
        );
    }
}


export const ListConnectedComponent = connect(mapStatetoListDivProps, mapDispatchToListDivProps)(ListDiv);

