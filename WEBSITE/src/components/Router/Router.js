import React from 'react';
import App from '../../App';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Posts from '../../pages/Posts/Posts';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import {
	removeTokenFromSessionStorage,
	loadTokenFromSessionStorage,
} from '../../actions/actions';

const Router = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Nav>
				<ul>
					{!loadTokenFromSessionStorage() ? (
						<>
							<li>
								<Link to='/' exact>
									Home
								</Link>
							</li>
							<li>
								<Link to='/login'>Login</Link>
							</li>
							<li>
								<Link to='/register'>Register</Link>
							</li>
						</>
					) : (
						<li>
							<div
								onClick={() => {
									removeTokenFromSessionStorage();
									navigate('/');
								}}>
								Log out
							</div>
						</li>
					)}
				</ul>
			</Nav>
			<Routes>
				<Route
					path='/'
					element={
						<CheckIfSessionIsValid>
							<App />
						</CheckIfSessionIsValid>
					}
				/>
				<Route
					path='/register'
					element={
						<CheckIfSessionIsValid>
							<Register />
						</CheckIfSessionIsValid>
					}
				/>
				<Route
					path='/login'
					element={
						<CheckIfSessionIsValid>
							<Login />
						</CheckIfSessionIsValid>
					}
				/>
				<Route
					path='/posts'
					element={
						<RequireAuth>
							<Posts />
						</RequireAuth>
					}
				/>
				<Route
					path='*'
					element={
						<CheckIfSessionIsValid>
							<App />
						</CheckIfSessionIsValid>
					}
				/>
			</Routes>
		</Wrapper>
	);
};

const RequireAuth = ({ children }) => {
	let location = useLocation();
	const auth = loadTokenFromSessionStorage();
	if (!auth) {
		return <Navigate to='/' state={{ from: location }} replace />;
	}
	return children;
};

const CheckIfSessionIsValid = ({ children }) => {
	let location = useLocation();
	const auth = loadTokenFromSessionStorage();
	if (auth) {
		return <Navigate to='/posts' state={{ from: location }} />;
	}
	return children;
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
	border: 0.2rem solid black;
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
			a,
			div {
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
					cursor: pointer;
				}
			}
		}
	}
`;

export default Router;
