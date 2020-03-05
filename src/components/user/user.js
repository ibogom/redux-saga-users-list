import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import _get from 'lodash/get'

import './user.css'

const User = ({ name, email, lastName, avatar, loadUserDetails, match, ...props }) => {

  const id = _get(match, 'params.id')

  useEffect(() => {
    loadUserDetails(id)
  }, [loadUserDetails, id])

  return (<div className="user">
      <div className="left-block">
        <img src={avatar} alt="user avatrt"/>
      </div>
    <div className="right-bloc">
        <h3>{name}</h3>
        <h5>{lastName}</h5>
      <a href={`mailto:${email}`} className="email">{email}</a>
    </div>
  </div>)
}

User.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  match: PropTypes.object,
  loadUserDetails: PropTypes.func,
  //Public API
}

User.defaultProps = {
  match: {}
}


export default User
