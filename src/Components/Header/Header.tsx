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
import LoginPage from '../LoginPage/LoginPage';
import About from '../About/About';
import Homepage from '../Homepage/Homepage';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const Header = () => {

    // contexts
    const USER = useContext(UserContext)

    // functions
    const googleLogout = () => {
        firebase.auth().signOut()
          .then(() => {
            USER[1]({
                name       : '',
                email      : '',
                image      : '',
                isLoggedIn : false
            })
          }).catch((error) => {
            console.log(error.msg)
          });
    }

    return (
        <Router>
            <div className="header">
                <Link to="/" className="left">
                    <LazyLoadImage
                        alt={"Todo Site"}
                        src={logoPic}
                        className="logo-image"
                    />
                    <div className="title">
                        {
                            USER[0].name !== '' ?
                                <strong>{USER[0].name}'s Todo List</strong>
                                :
                                <strong>Your Todo List</strong>
                        }
                    </div>
                </Link>
                <div className="right">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/about">About</Link>
                    {
                        USER[0].isLoggedIn === true ? 
                            <div className="profile">
                                <LazyLoadImage
                                    alt={USER[0].name}
                                    src={USER[0].image}
                                    className="profile-pic"
                                />
                                <p className="logout" onClick={()=>{googleLogout()}}>Logout</p>
                            </div>
                            :
                            <Link className="links" to="/login">Login</Link>
                    }
                </div>
            </div>

            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>

        </Router>
    );
};

export default Header;
