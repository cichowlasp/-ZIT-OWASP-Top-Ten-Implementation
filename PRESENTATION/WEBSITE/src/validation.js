const Joi = require('joi');

export const registerValidation = (user) => {
	const schema = Joi.object({
		email: Joi.string()
			.min(6)
			.required()
			.email({ tlds: { allow: false } }),
		password: Joi.string().min(4).required(),
		passwordRepeat: Joi.ref('password'),
		name: Joi.string().min(4).required(),
	});
	return schema.validate(user);
};

export const loginValidation = (user) => {
	const schema = Joi.object({
		email: Joi.string()
			.min(6)
			.required()
			.email({ tlds: { allow: false } }),
		password: Joi.string().min(4).required(),
	});
	return schema.validate(user);
};
