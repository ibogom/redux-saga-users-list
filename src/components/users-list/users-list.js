import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import Item from './item'

import './user-list.css'

const UsersList = ({ users, loadUsers }) => {

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const renderList = ({ id, ...rest }) => <Item key={id} id={id} {...rest}/>

  return (<ul className="users-list">
    {users.map(renderList)}
  </ul>)
}

UsersList.propTypes = {
  users: PropTypes.array,
  loadUsers: PropTypes.func,
  //Public API
}

UsersList.defaultProps = {
  users: []
}


export default UsersList
