import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link class="navLink" to="/home">Home</Link><br></br>
            <Link class="navLink"to="/about">About</Link><br></br>
            <Link  class="navLink"to="/profile">UserProfile</Link><br></br>
        </nav>
    );
};

export default Navbar;
