export const ADD_STUD = "ADD_STUD";
export const EDIT_FORM = "EDIT_FORM";

//Action Creator for adding student
export function add_student(arr) {
    return {
        type: ADD_STUD,
        data: arr
    }
}


//Action Creator for editing student tuple
export function edit_form(id) {
    return {
        type: EDIT_FORM,
        data: id
    }
}
