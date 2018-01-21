import React, { Component } from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import addStudentReducer from './reducers/reducer';
import { add_student } from './actions_creators/actionTypes';

let store = createStore(combineReducers({ data: addStudentReducer }))

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(add_student([102, 'Prerna', 'CS']))
store.dispatch(add_student([103, 'PFwfwerna', 'CreaS']))

console.log("Store out=", store.getState());

class App extends Component {

  render() {
    // console.log("Store=", store.getState().data);
    return (
      <p>
        Hello,
        <ul>
          {
            Object.keys(store.getState().data).map(
              (elem) => {
                return (<li>{store.getState().data[elem]}<br /></li>)
              })
          }</ul>
      </p>
      // <Provider store={store}>
      // <App />
      // </Provider>
    );
  }
}

export default App;
