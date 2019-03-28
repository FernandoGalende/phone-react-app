import { connect } from 'react-redux'
import { togleSearchAction } from '../actions'
import { Home }  from '../pages/home'

const mapStateToProps = (state, ownProps) => ({
  usedSearch: ownProps.filter === state.usedSearch
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togleSearch: () => dispatch(togleSearchAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
