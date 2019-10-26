
export function changeLoading (loading) {
  return {
    type: 'CHANGE_LOADING',
    loading,
  }
}


function addList (item) {
  return {
    type: 'PUSH_LIST',
    item,
  }
}


function changeState (state) {
  return {
    type: 'CHANGE_STATE',
    state,
  }
}

function getList () {
  const list = [{
    name: 'ranck',
  }, {
    name: 'sofy'
  }]
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(list)
    }, 2000)
  })
}

function setList (dispatch) {
  getList().then(list => {
    dispatch({
      type: 'SET_LIST',
      list
    })
  })
}


export default {
  changeLoading,
  addList,
  changeState,
  setList,
}
