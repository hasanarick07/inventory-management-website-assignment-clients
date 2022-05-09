import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-hot-toast";
import GoogleLogIn from "../Shared/GoogleLogIn/GoogleLogIn";
import axios from "axios";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const logEmail = useRef("");
  const logPassword = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    console.log(user);
  }
  if (loading || sending) {
    <Loading></Loading>;
  }
  const loginFormSubmit = async e => {
    e.preventDefault();
    const emailVerify = /\S+@\S+\.\S+/;
    const verifiedEmail = emailVerify.test(logEmail.current.value);
    if (!verifiedEmail) {
      toast.error("Please provide valid email");
    } else {
      setLoginEmail(logEmail.current.value);
    }
    const PasswordVerify =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const verifiedPassword = PasswordVerify.test(logPassword.current.value);
    if (!verifiedPassword) {
      toast.error(
        "At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight character"
      );
    } else {
      setLoginPassword(logPassword.current.value);
    }
    signInWithEmailAndPassword(loginEmail, loginPassword);
    const { data } = await axios.post(
      "https://agile-bastion-62567.herokuapp.com/login",
      { loginEmail }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  if (error || resetError) {
    toast.error(error?.message);
  }
  const emailReset = async () => {
    if (loginEmail) {
      await sendPasswordResetEmail(loginEmail);
      toast.success("Reset Password Email Sent");
    } else {
      toast.success("Please Enter Your Email Address");
    }
  };
  return (
    <div className="md:flex">
      <div className="basis-3/5">
        <img
          className="rounded-3xl w-auto"
          src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-374971,resizemode-1,msid-68423006/magazines/panache/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.jpg"
          alt=""
        />
      </div>
      <div className="block basis-2/5	 border-2 rounded-md w-fit m-auto text-white p-4">
        <GoogleLogIn></GoogleLogIn>
        <div className="flex  items-center my-1">
          <hr className="h-1  w-1/2  bg-amber-300 border-2 border-amber-400" />
          <h2 className="mx-2">OR</h2>
          <hr className="h-1 w-1/2  bg-amber-300 border-2 border-amber-400" />
        </div>
        <div className="md:p-2">
          <h2 className="text-4xl  text-white"> Log In...</h2>
          <form onSubmit={loginFormSubmit} className="w-fit m-auto">
            <div className="my-1">
              <label className="block mb-2 text-left text-m font-medium text-white">
                Email
              </label>
              <input
                ref={logEmail}
                type="email"
                id="email"
                className="bg-indigo-50 border border-indigo-300 
                text-white text-md rounded-lg focus:ring-indigo-200 
                focus:border-indigo-200 block w-full p-2.5 dark:bg-indigo-300
                 dark:border-indigo-300 dark:placeholder-indigo-100 
                 dark:focus:ring-indigo-200 font-medium dark:focus:border-indigo-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <h4 className="text-gray-200">
                We'll never share your email with anyone else.
              </h4>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-m text-left font-medium text-white ">
                Password
              </label>
              <input
                ref={logPassword}
                type="password"
                id="password"
                className="bg-indigo-50 border border-indigo-300 
                text-white text-md rounded-lg focus:ring-indigo-200
                 focus:border-indigo-200 block w-full p-2.5 font-medium	
               dark:bg-indigo-300 dark:border-indigo-300 dark:placeholder-indigo-100 dark:focus:ring-indigo-200 
               dark:focus:border-indigo-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mt-3 h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300
                   focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700
                    dark:border-gray-600 dark:focus:ring-indigo-600 
                    dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-white">Remember me</label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-md 
            w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
            >
              Log In
            </button>
            <div className="mt-2">
              New to Biker?
              <Link
                className="text-white ml-3 hover:text-gray-900
                 hover:border-gray-900 hover:text-md  pr-2 pb-1"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div
              onClick={emailReset}
              className="mt-3 mr-auto inline-block text-left text-white  hover:text-gray-900
                 hover:border-gray-900 hover:text-md  pr-2 pb-1"
            >
              Forget Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
