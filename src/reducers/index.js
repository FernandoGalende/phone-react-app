const INITIAL_STATE = [{
  usedSearch: false,
}]

export function generalState(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGLE_SEARCH':
      return state.map( state => {
        return {
          ...state,
          usedSearch: !state.usedSearch
        }
      })

    default:
      return state
  }
}
