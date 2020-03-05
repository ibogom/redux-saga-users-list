import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { setTitle } from '../../actions/app'

import NotFound from './404'

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title))
})

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps)
)

export default enhance(NotFound)
