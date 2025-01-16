import React, { useState } from 'react'
import { createNewUser } from '../services/SignupUserService'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigator = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUser = (e) => {

        e.preventDefault();

        const user = {userName, password};
        console.log(user);

        createNewUser(user).then((response) => {
            console.log(response.data);
            navigator('/');
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 mt-5'>
                    <h2 className='text-center'>Signup</h2>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Username</label>
                            <input type='text'
                                className='form-control'
                                required
                                name='username'
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input type='text'
                                className='form-control'
                                required
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <button className='btn btn-success mb-2' onClick={createUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup