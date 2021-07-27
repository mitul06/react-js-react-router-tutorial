import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/contact" >Contact</Link></li> */}
          <li>
            <NavLink
              to='/'
              activeStyle={{ fontWeight: 'bold', color: 'blue' }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              activeStyle={{ fontWeight: 'bold', color: 'blue' }}
              exact
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              activeStyle={{ fontWeight: 'bold', color: 'blue' }}
              exact
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/post/mobile'
              activeStyle={{ fontWeight: 'bold', color: 'blue' }}
              exact
            >
              Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              activeStyle={{ fontWeight: 'bold', color: 'blue' }}
              exact
            >
              login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
