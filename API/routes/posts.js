const router = require('express').Router();
const verify = require('./privateRoutes');
const Post = require('../model/post');
const jwt = require('jsonwebtoken');

router.get('/get-posts', verify, async (req, res) => {
	const token = req.header('auth-token');
	const userID = await jwt.verify(token, process.env.SECRET_TOKEN)._id;
	const posts = await Post.find({ userID }).exec();
	try {
		res.send(posts);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/add-post', verify, async (req, res) => {
	const {
		body: { token, title, descryption },
	} = req;
	const userID = await jwt.verify(token, process.env.SECRET_TOKEN)._id;
	const newPost = new Post({
		userID,
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

router.post('/remove-post', verify, async (req, res) => {
	const {
		body: { _id },
	} = req;
	const token = req.header('auth-token');
	const verified = await jwt.verify(token, process.env.SECRET_TOKEN);
	if (!verified) res.status(400).send('something went wrong');
	try {
		await Post.findByIdAndRemove({ _id });
		res.send('Removed Post');
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
