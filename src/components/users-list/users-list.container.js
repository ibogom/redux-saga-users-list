import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { loadUsers } from '../../actions/users'
import { getUsers } from '../../reducers/users'

import UsersList from './users-list'

const mapStateToProps = state => ({
  users: getUsers(state)
})

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers())
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(UsersList)
