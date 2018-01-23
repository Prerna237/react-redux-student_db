import { ADD_STUD, EDIT_FORM } from '../actions_creators/actionTypes';

//This reducer is getting the raw data from the dispatch function and modifying it to store in the store'state
export function addStudentReducer(state = [], action) {
    if (action.type === ADD_STUD) {

        var temp = {};
        temp['' + String(action.data[0])] = [action.data[1], action.data[2], action.function_handle];
        console.log("Temp=", temp, "    ", typeof (temp));
        console.log("State=", state, "    ", typeof (state));
        debugger;
        return (Object.assign({}, state, temp));

    }
    else if (action.type === EDIT_FORM) {
        debugger;
        console.log("The state is as output from reducer ", state);
    }
    return state;
}

//Add another reducer for 

export function editStudentReducer(state = [], action) {

    return state;
}