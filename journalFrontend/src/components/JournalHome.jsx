import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const JournalHome = () => {

    const [userName, setUsername] = useState('');
    const navigator = useNavigate();

    useEffect(() => {

        try{
            const storedUserName = localStorage.getItem("userName");
            if(!storedUserName) {
                navigator('/');
            } else {
                setUsername(storedUserName);
            }
        } catch (e) {

        }

    }, [])

    return (
        <div>
            <h2>Journal Home</h2>
            <h3>{userName}</h3>

        </div>
    )
}

export default JournalHome