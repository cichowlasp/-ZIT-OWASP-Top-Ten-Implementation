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
	const userID = jwt.verify(token, process.env.SECRET_TOKEN)._id;
	const post = new Post({
		userID,
		title,
		descryption,
	});
	try {
		await post.save();
		res.send('Post Added');
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
