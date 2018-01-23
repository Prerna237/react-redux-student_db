import React, { Component } from 'react';
import './App.css';
import { InputConnectedComponent, ListConnectedComponent } from './components/component';
/*
let store = createStore(combineReducers({ data: addStudentReducer }))

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(add_student([102, 'Prerna', 'CS']))
store.dispatch(add_student([103, 'PFwfwerna', 'CreaS']))

console.log("Store out=", store.getState());
*/
class App extends Component {

  render() {

    return (
      <div>
        <InputConnectedComponent />
        <ListConnectedComponent />
      </div>

      /*<p>
            Hello,
            <ul>
              {
                Object.keys(store.getState().data).map(
                  (elem) => {
                    return (<li>{store.getState().data[elem]}<br /></li>)
                  })
              }</ul>
          </p>*/
    );
  }
}

export default App;
