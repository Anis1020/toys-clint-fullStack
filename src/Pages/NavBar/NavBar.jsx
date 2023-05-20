import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider";
import img from "../../assets/profileimg.png";
import ActiveLink from "../../Components/ActiveLink";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/allToys">All Toys</Link>
              <Link to="/myToys">My Toys</Link>
              <Link to="/addAToys">Add A Toys</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Toys Bazar</a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-7">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/allToys">All Toys</ActiveLink>
            {user && <ActiveLink to="/myToys">My Toys</ActiveLink>}
            <ActiveLink to="/addAToys">Add A Toys</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/registration">Registration</ActiveLink>
          </ul>
        </div>
        <div className="flex gap-3">
          {user && (
            <>
              {" "}
              <button onClick={handleLogOut}>Log out</button>{" "}
              <img className="h-8 rounded" src={img} alt="" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
