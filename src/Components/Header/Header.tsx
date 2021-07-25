import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Header.css'
import logoPic from '../Images/logo.png';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {

    // contexts
    const USER = useContext(UserContext)

    return (
        <Router>
            <div className="header">
                <div className="left">
                    <LazyLoadImage
                        alt={"Todo Site"}
                        src={logoPic}
                    />
                    {
                        <strong>{USER[0].name}'s Todo</strong>
                    }
                </div>
                <div className="right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {
                        USER[0].isLoggedIn === true ? 
                            <LazyLoadImage
                                alt={USER[0].name}
                                src={USER[0].image}
                            />
                            :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </Router>
    );
};

export default Header;
