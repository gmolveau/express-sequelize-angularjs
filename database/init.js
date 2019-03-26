const models = require("../models");

models.sequelize
	.authenticate()
	.then( () => {
		console.log('db connected');
	})
	.catch( (err) => {
		console.error(err);
	});

models.sequelize.sync({force: true}).then( () => {
	console.log('tables created');
});