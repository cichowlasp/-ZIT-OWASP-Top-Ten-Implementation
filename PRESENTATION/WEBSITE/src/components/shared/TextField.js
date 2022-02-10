import React from 'react';
import styled from 'styled-components';

const TextField = (props) => {
	return <StyledInput {...props}></StyledInput>;
};

const StyledInput = styled.input`
	margin: 0.5rem;
	outline: none;
	border: 0.2rem solid black;
	border-radius: 0.5rem;
	font-size: 1rem;
	padding: 1rem;
	&:focus {
		border: 0.2rem solid ${(props) => props.theme.fg};
	}
`;

export default TextField;
