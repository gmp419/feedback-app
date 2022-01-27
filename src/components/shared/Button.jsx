import React from 'react'
import PropTypes from 'prop-types'


function Button({ children, version, type, disabled }) {

  return (
    <button type={type} disabled={disabled} className={`btn btn-${version} `}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button
