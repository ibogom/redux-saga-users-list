import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import User from '../../components/user'

import './user.css'


const UserPage = ({ setTitle }) => {

  useEffect(() => {
    setTitle('User Page')
  }, [setTitle])

  return (<div className="user-page">
    <User />
  </div>)
}

UserPage.propTypes = {
  setTitle: PropTypes.func
}

export default UserPage
