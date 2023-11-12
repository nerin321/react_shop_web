import React, { useState } from 'react';

function LoginForm() {
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

export default LoginForm;