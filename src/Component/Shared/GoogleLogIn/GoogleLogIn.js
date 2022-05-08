import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googleIcon from "../../../images/Google-icon.png";

const GoogleLogIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="md:mt-3" onClick={googleSignIn}>
        <button
          className="text-white flex bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-600 font-medium rounded-lg text-lg 
              w-3/4  sm:w-auto md:px-20 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700 mx-auto"
        >
          <img className="w-6 mx-3 " src={googleIcon} alt="" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogIn;
