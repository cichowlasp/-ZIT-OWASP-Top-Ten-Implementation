import React from 'react';
import { getPosts } from '../../actions/actions';
import { useAsync } from 'react-use';
import styled from 'styled-components';

const Posts = () => {
	const state = useAsync(async () => {
		return await getPosts();
	}, []);

	return (
		<Wrapper>
			<div>
				<h1>Add Post</h1>
			</div>
			<div>
				<h1>Posts</h1>
				<PostCard>
					<Title>{state?.value?.title}</Title>
					<Description>{state?.value?.description}</Description>
				</PostCard>
			</div>
		</Wrapper>
	);
};

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
	text-transform: capitalize;
`;

const Description = styled.div`
	margin: 1rem 0;
	font-size: 1rem;
`;

const PostCard = styled.div`
	padding: 1rem;
	width: 10rem;
	min-height: 10rem;
	border: 0.3rem solid black;
	border-radius: 1rem;
	text-align: left;
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 10rem;
	text-align: center;
`;

export default Posts;
