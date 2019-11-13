import PropTypes from "prop-types"
import React from "react"

import './styles.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className='header-back'>
      <h1 className='header-name'>
          AJ Cariaga
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
