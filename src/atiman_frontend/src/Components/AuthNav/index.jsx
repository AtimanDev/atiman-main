import logo from '../../Assets/Nav/atiman.svg'
import { Link } from 'react-router-dom'
import './authNav.css'
function AuthNav() {
  return (
    <nav className="auth__nav">
        <Link to={'/'}>
            <img src={logo} alt="logo" />
        </Link>
    </nav>
  )
}

export default AuthNav