import React, { useState } from 'react';
import TextField from '../../components/shared/TextField';
import Button from '../../components/shared/Button';
import { register } from '../../actions/actions';
import { Container, ErrorMessage } from './Elements';
import { registerValidation } from '../../validation';

const Register = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		passwordRepeat: '',
		name: '',
	});
	const [error, setError] = useState('');

	const handleRegister = async () => {
		const { email, password, passwordRepeat, name } = data;
		const validation = registerValidation(data);
		setError(validation.error ? validation.error.message : '');
		if (
			email &&
			password &&
			password === passwordRepeat &&
			!validation.error
		) {
			await register({ email, password, name });
		}
	};
	return (
		<Container>
			<h1>Register</h1>
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
			<TextField
				type='password'
				onChange={(e) =>
					setData({ ...data, passwordRepeat: e.target.value })
				}
				placeholder='Repeat password'
			/>
			<TextField
				type='text'
				onChange={(e) => setData({ ...data, name: e.target.value })}
				placeholder='Name'
			/>
			<ErrorMessage>{error}</ErrorMessage>

			<Button onClick={handleRegister}>Register</Button>
		</Container>
	);
};

export default Register;
