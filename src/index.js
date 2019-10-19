import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import actions from './stores/actions';

import store from './stores';

const log = () => {
  const state = store.getState();
  console.log(state)
}
store.subscribe(log)

console.log(store)
console.log(store.getState())
console.log(actions)
console.log(store.dispatch(actions.changeLoading(11)))

// setTimeout(() => {
//   store.dispatch(
//     actions.changeLoading(12)
//   )
// }, 3000)


actions.setList(store.dispatch)

ReactDOM.render(
  <Route />,
  document.getElementById('root')
);