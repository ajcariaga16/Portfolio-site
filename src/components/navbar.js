import React from 'react'
import { Link } from 'gatsby'

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
    <div>
      <ul>
        <li><Link to="/">Home</Link>
        </li>
        <li><Link to="./about">About</Link>
        </li>
        <li><Link to="./skills">Skills</Link>
        </li>
        <li><Link to="./projects">Projects</Link>
        </li>
      </ul>
    </div>
  }
}

export default Navbar
