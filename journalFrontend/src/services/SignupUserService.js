import axios from 'axios'

const PUBLIC_BASE_URL = 'http://localhost:8080/public/create-user';

// export const createNewUser = (user) => {
//     return axios.post(PUBLIC_BASE_URL, user);
// }

export const createNewUser = (user) => {
    return axios.post(PUBLIC_BASE_URL, user, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};