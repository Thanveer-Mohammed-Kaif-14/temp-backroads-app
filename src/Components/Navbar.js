import logo from '../images/logo.svg'
import { pageLinks, SocialLinks } from '../data'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'
                  rel="noreferrer">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className='nav-icons'>
          {SocialLinks.map((socLink) => {
            return (
              <li key={socLink.id}>
                <a href={socLink.href} target='_blank' rel="noreferrer" className='nav-icon'>
                  <i className={socLink.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
