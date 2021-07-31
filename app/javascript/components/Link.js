import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ href, text }) => {
  return (
    <div>
      <a href={href}>{text}</a>
    </div>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Link
