import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/profile">Profile</Link><br></br>
        </nav>
    );
};

export default Navbar;
