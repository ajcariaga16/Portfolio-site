import React from 'react'

import './styles.css'

const Footer = () => {
  return (
    <footer>
      <div style={{ textAlign: 'center'}}>
      <hr style={{ margin: '0 25%'}} />
        <p class="footer-text">Built from scratch with
          <a id="footer-link"
          href="https://reactjs.org/"> React</a>
          <a id="footer-link"
          href="https://www.w3.org/standards/webdesign/htmlcss/"> HTML5</a>
          <a id="footer-link"
          href="https://graphql.org/"> GraphQL</a> and
          <a id="footer-link"
          href="https://www.gatsbyjs.org/"> GatsbyJS</a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
