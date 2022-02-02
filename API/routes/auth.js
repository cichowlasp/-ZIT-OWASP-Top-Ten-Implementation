const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
	const {
		body: { name, email, password },
	} = req;

	const { error } = registerValidation({ name, email, password });
	if (error) return res.status(400).send(error.details[0].message);

	const userExist = await User.findOne({ email });
	if (userExist) return res.status(400).send('User already exists');

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = new User({
		name: name,
		email: email,
		password: hashedPassword,
	});

	try {
		const savedUser = await user.save();
		res.send({ userID: user._id });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/login', async (req, res) => {
	const {
		body: { email, password },
	} = req;

	const { error } = loginValidation({ email, password });
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email });
	if (!user)
		return res.status(400).send("User doesn't exisits. Create an account.");

	const validPassword = await bcrypt.compare(password, user.password);
	console.log(validPassword);
	if (!validPassword)
		return res.status(400).send('Invalid email or password');
	const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
	res.header('auth-token', token).send(token);
});

module.exports = router;
