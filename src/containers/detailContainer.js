import { connect } from 'react-redux'
import * as detailActions from '../actions/detailActions'
import { Detail }  from '../pages/detail'

const mapStateToProps = (state, ownProps) => ({
  onDetailResult: state.detail.onDetailResult
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateResult: phone => dispatch(detailActions.updateSearchResult(phone))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)