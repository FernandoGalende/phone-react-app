const INITIAL_STATE = {
  usedSearch: false,
  results:[]
}

export function globalState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGLE_SEARCH':
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