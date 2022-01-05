import React from 'react'
import Login from "./LoginScreen"
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
function about() {
    return (
        <div>
            <p>
            Full Stack, Front End, Back End — What Does It All Mean?
            Category: BLOG
            </p>

            <span className="register-screen__subtext">
          Register <Link to="/register">Register</Link>
          <p></p>
                </span>
        </div>
    )
}

export default about
