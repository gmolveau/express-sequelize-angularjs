const models = require("../models");
const Article = models.Article;

let validate = function(article) {
	if (! article.contenu) {
		return({
			data: null,
			error: "Contenu ne peut pas etre vide",
		});
	}
	return({
		data: null,
		error: null,
	});
}

let list = function() {
	return new Promise( (resolve, reject) => {

		return Article.findAll()
		.then( (articles) => {
			resolve({
				data: articles,
				error: null,
			})
		})
		.catch( (err) => { 
			reject({
				data: null,
				error: err,
			})
		});

	});
};

let create = function(new_article) {
	return new Promise( (resolve, reject) => {

		const isValid = validate(new_article);
		if(isValid.error !== null) 
			reject(isValid);
		
		return Article.create(new_article)
		.then( (article) => {
			resolve({
				data: article,
				error: null,
			})
		})
		.catch( (err) => {
			reject({
				data: null,
				error: err,
			})
		});

	});
};

let get = function(id) {};

let update = function(new_article) {};

let remove = function(id) {};

module.exports = {
	list : list,
	create : create,
	get : get,
	update : update,
	remove : remove,
}