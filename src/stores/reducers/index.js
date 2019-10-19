

const initState = {
  loading: false,
  list: [],
  state: "pause", // pause, start ,stop
}

function loginInfo (state = initState, action) {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: action.loading,
      }
    case 'PUSH_LIST':
      return {
        ...state,
        list: [...state.list, action.item]
      }
    case 'SET_LIST':
      return {
        ...state,
        list: action.list
      }
    case 'CHANGE_STATE':
      return {
        ...state,
        state: action.state,
      }
    default:
      return state;
  }
}

export default loginInfo;
