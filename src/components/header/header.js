import React, { useCallback } from 'react';
import PropTypes from 'prop-types'

import './header.css'

const Header = ({ title, history, location, ...props}) => {

  const navBack = useCallback((e) => {
    e.preventDefault()
    history.goBack()
  }, [])

  const isHomePath = location.pathname === '/'

  return (<header className="header">
    <div className="left">
      {!isHomePath && <button className="back" onClick={navBack}>
        Back
      </button>
      }
    </div>
    <div className="middle">
      {title}
    </div>
    <div className="right">

    </div>
  </header>)
}

Header.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string
}

Header.defaultProps = {
  location: {}
}

export default Header
