import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../store/auth"

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <h1>FashionFusion</h1>
      <Link to={"/Pro"}>Pro</Link>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
        {isLoggedIn ?
          <Link to={"/logout"}>Logout</Link>
          :
          <>
            <Link to={"/register"}>Sign Up/In</Link>
          </>
        }
      </main>
    </nav>
  );

};

export default Header;
//Hashlink is for, if u want to direct get to it on the same page