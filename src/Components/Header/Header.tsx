import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UserNameContext1, UserNameContext2, UserLoggedInOrNotContext1 } from '../../App';
import logoPic from '../Images/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {

    // contexts
    // const User = useContext(UserContext)
    const user_name = useContext(UserNameContext1)
    const set_user_name = useContext(UserNameContext2)
    const user_logged_in_or_not = useContext(UserLoggedInOrNotContext1)

    const fun = () => {
        set_user_name('s')
    }

    return (
        <Router>
            <div className="header">
                <div className="left">
                    <LazyLoadImage
                        alt={"Todo Site"}
                        src={logoPic}
                    />
                    {
                        <strong>{user_name}'s Todo</strong>
                    }
                </div>
                <div className="right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {
                        // User[0].isLoggedIn === true ? 
                        //     <LazyLoadImage
                        //         alt={User[0].name}
                        //         src={User[0].image}
                        //     />
                        //     :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </Router>
    );
};

export default Header;

function UserNameContext(UserNameContext: any) {
    throw new Error('Function not implemented.');
}
