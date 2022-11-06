import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{margin:'center',marginTop:'20px'}}>
            <Link style={{padding:'10px'}} to='/'>Home</Link>
            <Link style={{padding:'10px'}} to='/profile'>Profile</Link>
            <Link style={{padding:'10px'}} to='/about'>About</Link>
        </nav>
    );
}

export default Navbar;
