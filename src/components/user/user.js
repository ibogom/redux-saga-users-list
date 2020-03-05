import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import _get from 'lodash/get'

import './user.css'

const User = ({ loadUserDetails, match, ...props }) => {

  const id = _get(match, 'params.id')

  useEffect(() => {
    loadUserDetails(id)
  }, [loadUserDetails, id])

  return (<div className="user">

  </div>)
}

User.propTypes = {
  match: PropTypes.object,
  loadUserDetails: PropTypes.func,
  //Public API
}

User.defaultProps = {
  match: {}
}


export default User
