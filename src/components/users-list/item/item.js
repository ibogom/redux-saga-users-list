import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './item.css'

const Item = ({ id, name, avatar, age }) => {
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
        <span className="separator"> | </span>
        <p className="age">
          <span className="label">age:</span> {age}
        </p>
      </Link>
    </li>)
}

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  age: PropTypes.number
}

Item.defaultProps = {
  users: []
}

export default Item
