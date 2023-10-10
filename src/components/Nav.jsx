import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <nav className=" my-5 mx-60  gap-20 flex justify-between items-center">
      <div>
        <img className=" w-52" src={logo} alt="" />
      </div>
      <div className=" flex-1 flex justify-end gap-10  font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/reservations"}>Reservations</Link>
        <Link to={"/order_online"}>Order online</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
