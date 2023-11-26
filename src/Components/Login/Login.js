import React, { useState } from 'react';
import HeadingBar from '../Header/HeadingBar';
import NavBar from '../Header/NavBar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      // Handle login logic heres
  }

    return (
      <div>
        <HeadingBar/>
        <NavBar/>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center font-bold text-xl mb-0">Login</h2>
            <p className="text-center text-logincolor text-17px font-normal pt-0 pb-6 m-0">Please login using account detail below.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input className="w-email h-email shrink-0 rounded-sm border-solid border-loginboder bg-white" 
                    id="email" 
                    type="email" 
                    placeholder="Email Address"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="mb-0">
                <input className="w-email h-email shrink-0 rounded-sm border-solid border-loginboder bg-white" 
                    id="password" 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
              </div>
              <p className='text-logincolor text-17px font-normal mb-8'>
                <a href='/'>Forgot your password?</a>
              </p>
              <div className="flex items-center justify-between">
                <button className="w-email h-12 shrink-0 rounded-sm bg-pink" 
                    type="submit"
                    style={{width: '432px', height: '47px', flexShrink: 0, borderRadius: '3px', background: '#FB2E86'}}>
                    Sign In
                </button>
              </div>
              <p style={{color: '#9096B2', fontFamily: 'Lato', fontSize: '17px', fontWeight: 400}}>Don’t have an Account? <a href='/'>Create account</a></p>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;
