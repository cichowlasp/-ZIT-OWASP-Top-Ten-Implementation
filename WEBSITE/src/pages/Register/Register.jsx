import React, { useState } from 'react';
import TextField from '../../components/shared/TextField';
import Button from '../../components/shared/Button';
import { register, saveTokeToSessionStorage } from '../../actions/actions';
import { Container, ErrorMessage, Form } from './Elements';
import { registerValidation } from '../../validation';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		passwordRepeat: '',
		name: '',
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleRegister = async (event) => {
		event.preventDefault();
		const { email, password, passwordRepeat, name } = data;
		const validation = registerValidation(data);
		setError(validation.error ? validation.error.message : '');
		if (
			email &&
			password &&
			password === passwordRepeat &&
			!validation.error
		) {
			const token = await register({ email, password, name });
			console.log(token);
			saveTokeToSessionStorage(token);
			navigate('/posts');
		}
	};
	return (
		<Container>
			<Form onSubmit={(event) => handleRegister(event)}>
				<h1>Register</h1>
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

				<Button type='submit'>Register</Button>
			</Form>
		</Container>
	);
};

export default Register;
