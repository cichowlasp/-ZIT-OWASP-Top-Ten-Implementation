import React, { useState } from 'react';
import Button from '../../components/shared/Button';
import TextField from '../../components/shared/TextField';
import { login } from '../../actions/actions';
import { Container } from './Elements';

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const handleLogin = async () => {
		const { email, password } = data;
		if (email && password) {
			await login({ email, password });
		}
	};
	return (
		<Container>
			<h1>Login</h1>
			<TextField
				type='email'
				onChange={(e) => setData({ ...data, email: e.target.value })}
				placeholder='email'
			/>
			<TextField
				type='password'
				onChange={(e) => setData({ ...data, password: e.target.value })}
				placeholder='password'
			/>
			<Button onClick={handleLogin}>Login</Button>
		</Container>
	);
};

export default Login;
