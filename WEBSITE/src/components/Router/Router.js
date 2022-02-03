import React from 'react';
import App from '../../App';
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
