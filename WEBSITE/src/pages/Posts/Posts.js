import React, { useState } from 'react';
import { getPosts, addPost, removePost } from '../../actions/actions';
import { useAsyncRetry } from 'react-use';
import Button from '../../components/shared/Button';
import TextField from '../../components/shared/TextField';
import styled from 'styled-components';

const Posts = () => {
	const initData = {
		title: '',
		descryption: '',
	};
	const [data, setData] = useState(initData);
	let state = useAsyncRetry(async () => {
		return await getPosts();
	});

	return (
		<Wrapper>
			<Side>
				<h1>Add Post</h1>
				<Form
					onSubmit={async (e) => {
						e.preventDefault();
						await addPost(data);
						state.retry();
						setData(initData);
					}}>
					<TextField
						value={data.title}
						onChange={(e) =>
							setData({ ...data, title: e.target.value })
						}
						placeholder='Title'></TextField>
					<TextField
						value={data.descryption}
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
							<RemoveButton
								role='button'
								onClick={async () => {
									await removePost(el._id);
									state.retry();
								}}>
								x
							</RemoveButton>
							<Title>{el.title}</Title>
							<Description>{el.descryption}</Description>
						</PostCard>
					))}
				</CardContainer>
			</Side>
		</Wrapper>
	);
};

const RemoveButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 5px;
	padding: 5px;
	background-color: red;
	height: 10px;
	width: 10px;
	text-align: center;
	border-radius: 50%;
	line-height: 8px;
	vertical-align: middle;
	font-weight: bold;
	color: white;
	&:hover {
		cursor: pointer;
		opacity: 50%;
	}
`;

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
	margin-top: 10px;
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
	position: relative;
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
