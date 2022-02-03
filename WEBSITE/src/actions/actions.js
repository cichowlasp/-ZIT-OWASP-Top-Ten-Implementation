import axios from 'axios';

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
		console.log(resp);
	} else {
		return resp;
	}
};
