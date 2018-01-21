import React, { Component } from 'react';
import { edit_form } from '../actions_creators/actionTypes';
import { add_student } from '../actions_creators/actionTypes';

//This is a component as well as a container
export class InputFields extends Component {
    constructor(props) {
        super(props);
        this.submitButtonHandler = this.submitButtonHandler.bind(this);
    }

    //this button need to call the action creator
    submitButtonHandler() {

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

//mapping for the List Div component
const mapStatetoListDivProps = (state) => {
    return { incoming: state.data }
}

//mapping for the List Div component
//editForm is an action-creator
const mapDispatchToListDivProps = (dispatch) => {
    return {
        onListTupleClick: id => {
            dispatch(editForm(id))
        }
    }
}

export class ListDiv extends Component {
    constructor(props) {
        super(props);
    }
    //Somewhere here i need to call the getSTore function
    render() {
        var incoming_data = this.props.incoming;
        return (
            Object.keys(incoming_data).map(
                (elem, index) => {
                    return (<ListTuple key={index} id={elem} array={incoming_data[elem]} onListTupleClick={onTupleClick} />);
                })

        );
    }
}

class ListTuple extends Component {
    constructor(props) {
        super(props);
        console.log('Created a ListTuple');
    }

    render() {
        // console.log(this.props.array);
        return (
            <div class="list-tuple" onClick={this.props.onListTupleClick} >
                {this.props.id}====>[{this.props.array}]
            </ div>
        );
    }
}

