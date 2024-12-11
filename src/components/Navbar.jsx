import React from "react";
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  let userID = localStorage.getItem("userID");
  // console.log(userID, "NAvbar");

  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("user");
    navigate("/login");
  };

  let deleteProfile = () => {
    let conformationVal = confirm("Are you sure you want to delete");
    console.log(conformationVal);
    if (conformationVal) {
      axios
        .delete(`http://localhost:5000/users/${userID}`)
        .then(() => {
          toast.success("Deleted Successfully");
          localStorage.removeItem("userID");
          localStorage.removeItem("user");
          navigate("/register");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <nav>
      <aside className={style.logo}></aside>
      <ul className={style.menu}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        {userID ? (
          <>
            <li className={style.dropdownContainer}>
              <Link to="/profile">profile</Link>
              <div className={style.dropdownMenu}>
                <li className={style.dropdownItem}>
                  <Link to="/updateprofile">Update</Link>
                </li>
                <li className={style.dropdownItem} onClick={deleteProfile}>
                  Delete
                </li>
                <li onClick={logout} className={style.dropdownItem}>
                  logout
                </li>
              </div>
            </li>
            <li onClick={logout} className={style.logout}>
              logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
