import React, { useContext } from 'react';
import './Header.css';
import icon from '../../icons/Group 33072.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    return (
        <div className="header-container">
            <ul>
                <img src={icon} alt="" />
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/deals">Deals</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li>{loggedInUser.name}</li>
                <Link to="/login">
                    { loggedInUser.email ?
                        <button type="button" class="btn btn-danger" onClick={() => setLoggedInUser({})}>Logout</button> : <button type="button" class="btn btn-danger">Login</button> 
                    }
                </Link>

            </ul>
        </div>
    );
};

export default Header;