import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { loadUserDetails } from '../../actions/users'

import User from './user'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  loadUserDetails: id => dispatch(loadUserDetails(id))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(User)
