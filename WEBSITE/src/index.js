import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router/Router';
import { ThemeProvider } from 'styled-components';

const theme = {
	fg: 'palevioletred',
	bg: 'white',
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
