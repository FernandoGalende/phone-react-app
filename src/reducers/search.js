const INITIAL_STATE = {
  usedSearch: false,
  results:[]
}

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        usedSearch: true
      }

    case 'UPDATE_SEARCH_RESULTS':
      return {
        ...state,
        results: action.results
      }

    default:
      return state
  }
}