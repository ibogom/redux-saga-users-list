import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import './404.css';

const NotFound = ({ setTitle }) => {

  useEffect(() => {
    setTitle('Page Not Found')
  }, [setTitle])

  return (<div className="notFound">
    <p className="text_404">
      Ooops... something went wrong! Page that you are looking for not found
    </p>
    <h4 className="code_404">
      404
    </h4>
  </div>)
}

NotFound.propTypes = {
  setTitle: PropTypes.func
}

export default NotFound
