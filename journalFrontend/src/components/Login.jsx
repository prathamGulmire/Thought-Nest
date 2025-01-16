import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance, { setAuthHeader } from '../services/LoginUserService';

const Login = () => {

    const navigator = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        //const authString = `Basic ${btoa(`${userName}:${password}`)}`;

        try {
            // Set the Authorization header dynamically
            setAuthHeader(userName, password);

            // Test the login by making a request to a protected route
            await axiosInstance.get("/journal");

            // Store username locally if needed
            localStorage.setItem("userName", userName);

            // Redirect or update the UI after successful login
            window.location.href = "/journalhome";
        } catch (err) {
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 mt-5'>
                    <h2 className='text-center'>Login</h2>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Username</label>
                            <input type='text'
                                className='form-control'
                                required
                                name='userName'
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input type='password'
                                className='form-control'
                                required
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button className='btn btn-primary mb-2' onClick={handleLogin}>Submit</button>
                        <br />
                        <a style={{ display: 'inline-block', marginBottom: '10px' }} href='http://localhost:5173/signup'>
                            Don't have an account?
                        </a>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login