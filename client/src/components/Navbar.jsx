import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <li className="left">
                <Link to="/">Calorie Tracker</Link>
            </li>
            <li className="right">
                <Link to="sign-up">Sign Up</Link>
            </li>
            <li className="right">
                <Link to="login">Login</Link>
            </li>
        </div>
    )
}

export default Navbar;
