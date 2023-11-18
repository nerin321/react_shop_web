import React, { useState } from "react";
import HeadingBar from "../Header/HeadingBar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    <div>
      <HeadingBar/>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-black text-32px font-bold not-italic leading-normal mb-2">Login</h2>
          <p className="text-logincolor text-17px text-center not-italic font-normal leading-normal pb-9">
            Please login using account detail below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                className="appearance-none border border-solid rounded-sm w-email h-email py-6 px-3 text-[LatoBlack] bg-white focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-0">
              <input
                className="appearance-none border border-solid rounded-sm w-email h-email text-[LatoBlack] m-0 pb-0 bg-white focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-logincolor text-17px font-normal leading-normal pt-3 pb-6">
              Forgot your password?
            </p>
            <div className="flex items-center justify-between">
              <button
                className="text-white font-bold py-2 px-4 rounded w-email h-email bg-pink focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <p className="text-logincolor text-17px font-normal pt-3">
              Don’t have an Account? Create account
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
