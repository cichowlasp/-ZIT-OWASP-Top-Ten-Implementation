import axios from 'axios';
import Cookies from 'js-cookie';
const API_URL = 'http://localhost:3000';

export const login = async ({ email, password }) => {
	const resp = await axios.post(`${API_URL}/api/user/login`, {
		email,
		password,
	});
	console.log(resp);
	if (resp.status === 200) {
		return resp;
	} else {
		console.error(resp);
	}
};

export const register = async ({ email, password, name }) => {
	const resp = await axios.post(`${API_URL}/api/user/register`, {
		email,
		password,
		name,
	});
	if (resp.status === 200) {
		return resp;
	} else {
		console.error(resp);
	}
};

export const getPosts = async () => {
	const token = loadTokenFromSessionStorage();

	const res = await axios.get(`${API_URL}/api/posts`, {
		headers: { 'auth-token': token },
	});
	return res.data;
};

export const saveTokeToSessionStorage = (token) => {
	Cookies.set('token', token.data);
};

export const loadTokenFromSessionStorage = () => {
	const token = Cookies.get('token');
	return token === '' ? false : token;
};

export const removeTokenFromSessionStorage = () => {
	Cookies.remove('token');
};
