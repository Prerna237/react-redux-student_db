import React, { Component } from 'react';

//This is a component as well as a container
export class InputFields extends Component {
    constructor(props) {
        super(props);
        this.submitButtonHandler = this.submitButtonHandler.bind(this);
    }

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

export class ListDiv extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var incoming = store.getState().data;
        return (
            Object.keys(incoming).map(
                (elem, index) => {
                    return (<ListTuple key={index} id={elem} array={store.getState().data[elem]} onListTupleClick={onTupleClick} />);
                })

        );
    }
}

export class ListTuple extends Component {
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

