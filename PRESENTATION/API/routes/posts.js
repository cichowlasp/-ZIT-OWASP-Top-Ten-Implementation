const router = require('express').Router();
const Post = require('../model/post');

router.get('/get-posts', async (req, res) => {
	const token = req.header('auth-token');
	const posts = await Post.find({ userID: token });
	try {
		res.send(posts);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/add-post', async (req, res) => {
	const {
		body: { token, title, descryption },
	} = req;
	const newPost = new Post({
		userID: token,
		title,
		descryption,
	});
	try {
		await newPost.save();
		res.send('Post Added');
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/remove-post', async (req, res) => {
	const {
		body: { _id },
	} = req;
	const token = req.header('auth-token');
	const verified = token ? true : false;
	if (!verified) res.status(400).send('something went wrong');
	try {
		await Post.findByIdAndRemove({ _id });
		res.send('Removed Post');
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
