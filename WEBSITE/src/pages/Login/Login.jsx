import React, { useState } from 'react';
import Button from '../../components/shared/Button';
import TextField from '../../components/shared/TextField';
import Cookies from 'js-cookie';
import { login } from '../../actions/actions';
import { Container, ErrorMessage } from './Elements';
import { loginValidation } from '../../validation';

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const handleLogin = async () => {
		const { email, password } = data;
		const validation = loginValidation(data);
		setError(validation.error ? validation.error.message : '');
		if (email && password && !error) {
			const token = await login({ email, password });
			Cookies.set('token', token);
		}
	};
	return (
		<Container>
			<h1>Login</h1>
			<TextField
				type='email'
				onChange={(e) => setData({ ...data, email: e.target.value })}
				placeholder='Email'
			/>
			<TextField
				type='password'
				onChange={(e) => setData({ ...data, password: e.target.value })}
				placeholder='Password'
			/>
			<ErrorMessage>{error}</ErrorMessage>
			<Button onClick={handleLogin}>Login</Button>
		</Container>
	);
};

export default Login;
