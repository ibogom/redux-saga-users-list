import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { getTitle } from '../../reducers/app'

import Header from './header'

const mapStateToProps = state => ({
  title: getTitle(state)
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
)

export default enhance(Header)
