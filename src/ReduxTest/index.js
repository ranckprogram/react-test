import React, { useReducer } from 'react'
import reducer, { initState } from '../stores/reducers'
import actions, { changeLoading } from '../stores/actions'

function ReduxTest (props) {
  const [state, dispatch] = useReducer(reducer, initState)

  console.log(reducer, initState)
  console.log(state.loading)

  function handleClick () {
    dispatch(changeLoading(true))
  }
  return (
    <>
      <button onClick={handleClick}>change</button>
      ReduxTest {state.loading ? 'loading' : 'initial'}
    </>
  );
}


export default ReduxTest
