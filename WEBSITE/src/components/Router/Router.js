import React from 'react';
import App from '../../App';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Router = () => {
	return (
		<Wrapper>
			<Nav>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/login'>Login</a>
					</li>
					<li>
						<a href='/register'>Register</a>
					</li>
				</ul>
			</Nav>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	max-height: 100%;
	height: 100%;
	width: 100%;
	overflow-y: hidden;
`;

const Nav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 7rem;
	background-color: ${(props) => props.theme.fg};
	display: flex;
	flex-direction: row;
	list-style-type: none;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 1.5rem 1.5rem;
	ul {
		height: 100%;
		display: flex;
		flex-direction: row;
		list-style-type: none;
		justify-content: center;
		align-items: center;
		padding-left: 0;
		li {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 2rem;
			font-size: 1.5rem;
			text-transform: none;
			font-weight: bold;
			a {
				color: black;
				&:link {
					text-decoration: none;
				}
				&:visited {
					text-decoration: none;
					color: black;
				}
				&:focus,
				:hover {
					color: ${(props) => props.theme.bg};
				}
			}
		}
	}
`;

export default Router;
