import { ADD_STUD } from '../actions_creators/actionTypes';


export default function addStudentReducer(state = [], action) {
    // state_val = Object.assign({}, state);
    if (action.type === ADD_STUD) {
        // console.log("Data inside=", (state));
        /* var temp = [];
         var temp2 = Object.assign([], state);
         console.log("Temp=", temp, "    ", typeof (temp));
         console.log("Temp2=", temp2, "    ", typeof (temp2));
         console.log("third", temp.push(Array(temp2)))
 */

        var temp = {};
        temp['' + String(action.data[0])] = [action.data[1], action.data[2]];
        console.log("Temp=", temp, "    ", typeof (temp));
        console.log("State=", state, "    ", typeof (state));

        return (Object.assign({}, state, temp));



        // return (Object.assign([].push(Object.assign([], action.data))));
    }
    return state;
}