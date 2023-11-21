<<<<<<< HEAD
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-center font-bold text-xl mb-5">Login</h2>
                <p className="text-center text-gray-500 mb-5" style={{color: '#9096B2', fontFamily: 'Lato', fontSize: '17px', fontWeight: 400}}>Please login using account detail below.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                               id="email" 
                               type="email" 
                               placeholder="Email Address"
                               value={email} 
                               onChange={e => setEmail(e.target.value)}
                               style={{width: '432px', height: '52px', flexShrink: 0, borderRadius: '2px', border: '1px solid #C2C5E1', background: '#FFF'}} />
                    </div>
                    <div className="mb-6">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                               id="password" 
                               type="password" 
                               placeholder="Password"
                               value={password} 
                               onChange={e => setPassword(e.target.value)}
                               style={{width: '432px', height: '52px', flexShrink: 0, borderRadius: '2px', border: '1px solid #C2C5E1', background: '#FFF'}} />
                    </div>
                    <p style={{color: '#9096B2', fontFamily: 'Lato', fontSize: '17px', fontWeight: 400}}>Forgot your password?</p>
                    <div className="flex items-center justify-between">
                        <button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="submit"
                                style={{width: '432px', height: '47px', flexShrink: 0, borderRadius: '3px', background: '#FB2E86'}}>
                            Sign In
                        </button>
                    </div>
                    <p style={{color: '#9096B2', fontFamily: 'Lato', fontSize: '17px', fontWeight: 400}}>Don’t have an Account? Create account</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
=======
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
>>>>>>> 0c7cc2ca2f079bb9fd3257befc49d68a2dca42d3
