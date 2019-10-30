import React from 'react'
import { Link } from 'gatsby'

import './navbar.css'

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
      <div>
        <ul className="nav-list">
        {this.state.items.map((item) => {
          return (
            <li>
              <Link to={item.link} className="nav-item">
                {item.name}
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Navbar
