export const ADD_STUD = "ADD_STUD";

//Action Creator for adding student
export function add_student(arr) {
    return {
        type: ADD_STUD,
        data: arr
    }
}

