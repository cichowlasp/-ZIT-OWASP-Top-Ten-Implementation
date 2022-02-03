import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

export const login = async({email, password}) => {
    const resp = await axios.post(`${API_URL}/api/user/login`, {email, password});
    if(resp.status === 200) {
        console.log('Logged in');
    } else {
        console.error(resp.data);
    }
}

export const register = async({email, password, name}) => {
    const resp = await axios.post(`${API_URL}/api/user/register`, {email, password, name});
    if(resp.status === 200) {
        console.log('Logged in');
    } else {
        console.error(resp.data);
    }
}