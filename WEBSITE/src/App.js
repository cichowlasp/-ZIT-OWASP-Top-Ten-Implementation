import './App.css';
import { useNavigate } from 'react-router-dom';
import Button from './components/shared/Button';
import styled from 'styled-components';

function App() {
	const navigate = useNavigate()
	return (
		<Wrapper>
			<div className='App'>
				<h1>Home Page</h1>
			</div>
			<ButtonsContainer>
				<Button onClick={() => navigate('/login')}>Login</Button>
				<Button onClick={() => navigate('/register')}>Register</Button>
			</ButtonsContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default App;
