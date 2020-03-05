import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import UsersList from '../../components/users-list'

import './users.css'

const Users = ({ setTitle }) => {

  useEffect(() => {
    setTitle('Users List')
  }, [setTitle])

  return (<div className="users-page">
    <UsersList/>
  </div>)
}

Users.propTypes = {
  setTitle: PropTypes.func
}

export default Users
