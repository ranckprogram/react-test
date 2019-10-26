import React from 'react'
import { connect } from 'react-redux'
import actions, { changeLoading } from '../stores/actions'

function ReduxTest (props) {
  return (
    <>
      ReduxTest
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoading: (loading) => dispatch(changeLoading(loading)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
