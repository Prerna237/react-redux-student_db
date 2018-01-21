import { ADD_STUD } from '../actions_creators/actionTypes';

//This reducer is getting the raw data from the dispatch function and modifying it to store in the store'state
export default function addStudentReducer(state = [], action) {
    if (action.type === ADD_STUD) {

        var temp = {};
        temp['' + String(action.data[0])] = [action.data[1], action.data[2]];
        console.log("Temp=", temp, "    ", typeof (temp));
        console.log("State=", state, "    ", typeof (state));

        return (Object.assign({}, state, temp));

    }
    return state;
}