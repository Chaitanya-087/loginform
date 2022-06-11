import { BiLogIn } from 'react-icons/bi';
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <header className='navbar'>
            <h2 className='logo'>
                logo
            </h2>
            <Link to='/login'>
                <button className='btn btn-login'>
                    <span>login</span>
                    <BiLogIn className='login-icon' />
                </button>
            </Link>
        </header>
    )
}

export default Navbar;
