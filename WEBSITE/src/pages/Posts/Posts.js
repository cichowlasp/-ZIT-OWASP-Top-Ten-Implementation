import React, { useState } from 'react';
import { getPosts, addPost } from '../../actions/actions';
import { useAsync } from 'react-use';
import Button from '../../components/shared/Button';
import TextField from '../../components/shared/TextField';
import styled from 'styled-components';

const Posts = () => {
	const [data, setData] = useState({
		title: '',
		descryption: '',
	});
	const state = useAsync(async () => {
		return await getPosts();
	});

	return (
		<Wrapper>
			<Side>
				<h1>Add Post</h1>
				<Form onSubmit={() => addPost(data)}>
					<TextField
						onChange={(e) =>
							setData({ ...data, title: e.target.value })
						}
						placeholder='Title'></TextField>
					<TextField
						placeholder='Descryption'
						onChange={(e) =>
							setData({ ...data, descryption: e.target.value })
						}></TextField>
					<Button type='submit'>Add</Button>
				</Form>
			</Side>
			<Line />
			<Side>
				<h1>Posts</h1>
				<CardContainer>
					{state?.value?.map((el) => (
						<PostCard key={el._id}>
							<Title>{el.title}</Title>
							<Description>{el.descryption}</Description>
						</PostCard>
					))}
				</CardContainer>
			</Side>
		</Wrapper>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	input {
		max-width: 50%;
	}
`;

const Line = styled.div`
	height: 80%;
	width: 0;
	border: 2px solid black;
`;

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
	margin-bottom: 1rem;
`;

const Side = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	max-height: calc(100% - 10rem);
`;

const Wrapper = styled.div`
	height: 100%;
	max-width: 100%;
	display: flex;
	margin-top: 10rem;
	text-align: center;
	justify-content: center;
`;
const CardContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100;
	flex-direction: column;
	overflow-y: auto;
	align-items: center;
`;

export default Posts;
