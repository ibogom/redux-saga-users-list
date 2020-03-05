import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './item.css'

const Item = ({ id, name, lastName, avatar, email }) => {
  return (
    <li className="list-item-wrapper">
      <Link to={`/${id}`} className="list-item">
        <div className="avatar">
          <img src={avatar} alt=""/>
        </div>
        <span className="separator"> | </span>
        <p className="name">
          <span className="label">name:</span> {name}
        </p>
        <p className="last-name">
          <span className="label">last name:</span> {lastName}
        </p>
        <span className="separator"> | </span>
        <p className="email">
          <span className="label">email:</span> {email}
        </p>
      </Link>
    </li>)
}

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string
}

Item.defaultProps = {
  users: []
}

export default Item
