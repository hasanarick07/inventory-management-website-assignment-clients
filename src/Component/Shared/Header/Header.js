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

          <div className="dropdown dropdown-end mr-3 indicator">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    src="https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg"
                    alt=""
                  />
                )}
                <span className="badge badge-sm indicator-item">18</span>
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact text-left dropdown-content mt-16 p-2 shadow bg-base-100 rounded-box w-36"
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
