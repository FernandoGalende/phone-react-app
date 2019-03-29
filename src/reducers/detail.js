const INITIAL_STATE = {
  onDetailResult:[]
}

export default function onDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULT':
      return {
        ...state,
        onDetailResult: action.result,
      }

    default:
      return state
  }
}