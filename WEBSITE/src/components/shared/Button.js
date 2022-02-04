import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
	height: 3rem;
	min-width: 7rem;
	width: fit-content;
	background-color: ${(props) => props.theme.bg};
	border: 0.2rem solid ${(props) => props.theme.fg};
	border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: bold;
	color: ${(props) => props.theme.fg};
	margin: 1rem;
	&:focus {
		color: ${(props) => props.theme.bg};
		background-color: ${(props) => props.theme.fg};
	}
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.bg};
		background-color: ${(props) => props.theme.fg};
	}
`;

export default Button;
