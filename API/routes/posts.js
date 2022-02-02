const router = require('express').Router();
const verify = require('./privateRoutes');

router.get('/', verify, (req, res) => {
	res.json({
		title: 'my first post',
		description: 'random data you should not access',
	});
});

module.exports = router;
