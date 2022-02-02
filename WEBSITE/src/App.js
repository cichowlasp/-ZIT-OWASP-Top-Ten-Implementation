import './App.css';
import Button from './components/shared/Button';
import styled from 'styled-components';

function App() {
	return (
		<Wrapper>
			<div className='App'>
				<h1>Home Page</h1>
			</div>
			<ButtonsContainer>
				<Button>Login</Button>
				<Button>Register</Button>
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
