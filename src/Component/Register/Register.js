import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { toast } from "react-hot-toast";
import GoogleLogIn from "../Shared/GoogleLogIn/GoogleLogIn";

const Register = () => {
  const [registeringEmail, setRegisteringEmail] = useState("");
  const [registeringPassword, setRegisteringPassword] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const registerEmail = useRef("");
  const registerPassword = useRef("");
  if (user) {
    // console.log(user);
    navigate("/home");
  }

  if (error) {
    toast(error?.message);
  }

  if (loading) {
    <Loading></Loading>;
  }
  const registerFormSubmit = e => {
    e.preventDefault();
    const emailVerify = /\S+@\S+\.\S+/;
    const verifiedEmail = emailVerify.test(registerEmail.current.value);
    if (!verifiedEmail) {
      toast("Please provide valid email");
    } else {
      setRegisteringEmail(registerEmail.current.value);
    }
    const PasswordVerify =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const verifiedPassword = PasswordVerify.test(
      registerPassword.current.value
    );
    if (!verifiedPassword) {
      toast(
        "At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight character"
      );
    } else {
      setRegisteringPassword(registerPassword.current.value);
    }
    createUserWithEmailAndPassword(registeringEmail, registeringPassword);

    // console.log(user);
  };
  const [check, setCheck] = useState(false);
  return (
    <div className="md:flex  justify-center items-center">
      <div className="basis-3/5">
        <img
          className="rounded-lg w-auto"
          src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-374971,resizemode-1,msid-68423006/magazines/panache/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.jpg"
          alt=""
        />
      </div>
      <div className="basis-2/5 border-2 rounded-md w-fit m-auto p-1">
        <GoogleLogIn></GoogleLogIn>
        <div className="flex  justify-center items-center my-1">
          <hr className="h-1  w-1/2  bg-amber-300 border-2 border-amber-400" />
          <h2 className="mx-2 text-white">OR</h2>
          <hr className="h-1  w-1/2  bg-amber-300 border-2 border-amber-400" />
        </div>
        <div>
          <h2 className="text-4xl  text-white"> Register...</h2>
          <form onSubmit={registerFormSubmit} className="w-fit m-auto">
            <div className="my-1">
              <label
                className="block mb-2 text-left text-m font-medium
                text-white"
              >
                Email
              </label>
              <input
                ref={registerEmail}
                type="email"
                id="email"
                className="bg-indigo-50 border border-indigo-300 
                text-white text-md rounded-lg focus:ring-indigo-200 
            focus:border-indigo-200 block w-full p-2.5
             dark:bg-indigo-300 dark:border-indigo-300 
             dark:placeholder-indigo-100  
             dark:focus:ring-indigo-200 font-medium	
             dark:focus:border-indigo-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <h4 className="text-gray-200">
                We'll never share your email with anyone else.
              </h4>
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
                text-white"
              >
                Password
              </label>
              <input
                ref={registerPassword}
                type="password"
                id="password"
                className="bg-indigo-50 border border-indigo-300 
                text-white text-md rounded-lg focus:ring-indigo-200 
            focus:border-indigo-200 block w-full p-2.5
             dark:bg-indigo-300 dark:border-indigo-300 
             dark:placeholder-indigo-100  
             dark:focus:ring-indigo-200 font-medium	
             dark:focus:border-indigo-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
                text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="bg-indigo-50 border border-indigo-300 
             text-md rounded-lg focus:ring-indigo-200
             focus:border-indigo-200 block w-full p-2.5
             dark:bg-indigo-300 dark:border-indigo-300 
             dark:placeholder-indigo-100 text-white
              dark:focus:ring-indigo-200 font-medium	
             dark:focus:border-indigo-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mt-3 h-5">
                <input
                  onClick={() => setCheck(!check)}
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
                <label className="font-medium text-white">
                  Accept Biker Terms and Conditions
                </label>
              </div>
            </div>
            <div className="mx-auto">
              <button
                disabled={!check}
                type="submit"
                className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-md 
              w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
              >
                Submit
              </button>
            </div>
            <div className="my-2 text-white">
              Already have an account?
              <Link
                className="text-white ml-3 hover:text-gray-900 hover:border-gray-900 hover:text-md  pr-2 pb-1"
                to="/LogIn"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
