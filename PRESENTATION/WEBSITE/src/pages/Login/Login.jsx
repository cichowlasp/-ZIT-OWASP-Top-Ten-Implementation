import React, { useState } from 'react';
import Button from '../../components/shared/Button';
import TextField from '../../components/shared/TextField';
import { login, saveTokeToSessionStorage } from '../../actions/actions';
import { Container, ErrorMessage, Form } from './Elements';
import { loginValidation } from '../../validation';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const handleLogin = async (event) => {
		event.preventDefault();
		const { email, password } = data;
		const validation = loginValidation(data);
		setError(validation.error ? validation.error.message : '');
		if (email && password && !error) {
			const token = await login({ email, password });
			saveTokeToSessionStorage(token);
			navigate('/posts');
		}
	};
	return (
		<Container>
			<h1>Login</h1>
			<Form onSubmit={(event) => handleLogin(event)}>
				<TextField
					type='email'
					onChange={(e) =>
						setData({ ...data, email: e.target.value })
					}
					placeholder='Email'
				/>
				<TextField
					type='password'
					onChange={(e) =>
						setData({ ...data, password: e.target.value })
					}
					placeholder='Password'
				/>
				<ErrorMessage>{error}</ErrorMessage>
				<Button type='submit'>Login</Button>
			</Form>
		</Container>
	);
};

export default Login;
