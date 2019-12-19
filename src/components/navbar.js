import React from 'react'
import { Link } from 'gatsby'

import '../css/navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About',
          link: './about',
        },
        {
          name: 'Skills',
          link: './skills',
        },
        {
          name: 'Projects',
          link: './projects',
        },
      ]
    }
  }
  render() {
    return (
      <nav className="navbar">
        <ul>
        {this.state.items.map((item) => {
          return (
            <li>
              <Link to={item.link} className="link">
                {item.name}
              </Link>
            </li>
          )
        })}
        </ul>
      </nav>
    )
  }
}

export default Navbar
