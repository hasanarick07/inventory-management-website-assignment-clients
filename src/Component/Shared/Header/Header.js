import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import bike from "../../../images/bike.png";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user?.photoURL);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const signOutButton = () => {
    signOut(auth);
    if (!user) {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div
            onClick={handleHome}
            className="navbar-center flex items-center justify-center"
          >
            <img
              className="md:w-16 md:h-16 w-10 h-10 mr-2 rounded-full bg-slate-100"
              src={bike}
              alt=""
            />
            <span className="md:text-6xl text-3xl font-bold text-slate-100">
              BIKER
            </span>
          </div>
        </div>
        <div className="flex-none">
          {user ? (
            ""
          ) : (
            <Link
              className="ml-2 hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1"
              to="/login"
            >
              Log In
            </Link>
          )}
          {user ? (
            ""
          ) : (
            <Link
              className="ml-2 hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1"
              to="/register"
            >
              Register
            </Link>
          )}
          {user ? (
            <div
              className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1"
              onClick={signOutButton}
            >
              Log Out
            </div>
          ) : (
            ""
          )}
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabindex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    src="https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact text-left dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36"
            >
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                <Link to="/home">Home</Link>
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                {user ? <Link to="/myBikes">My Bikes</Link> : ""}
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                {user ? <Link to="/manageInventories">Manage Bikes</Link> : ""}
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                {user ? <Link to="/addNewBikes">Add Bikes</Link> : ""}
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                <Link to="/blogs">Blogs</Link>
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                <Link to="/about">About Us</Link>
              </div>
              <div className="hover:bg-gray-700 hover:rounded-md hover:text-gray-100 hover:p-1">
                {user ? <div onClick={signOutButton}>Log Out</div> : ""}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
