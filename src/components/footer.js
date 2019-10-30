import React from 'react'

import footerStyles from './footer.css'

const Footer = () => {
  return (
    <footer>
      <div style={{ textAlign: 'center'}}>
      <hr style={{ margin: '0 25%'}} />
        <p className={footerStyles.foottext}>Built from scratch with
          <a className={footerStyles.footer}
          href="https://reactjs.org/"> React</a>
          <a className={footerStyles.footer}
          href="https://www.w3.org/standards/webdesign/htmlcss/"> HTML5</a>
          <a className={footerStyles.footer}
          href="https://graphql.org/"> GraphQL</a> and
          <a className={footerStyles.footer}
          href="https://www.gatsbyjs.org/"> GatsbyJS</a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
