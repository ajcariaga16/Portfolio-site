import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      AJ Cariaga
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
