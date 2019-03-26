const dao = require("../dao/article");

let send_response = function(d, res){
	if(d.error) res.status(400).send(d); //changer l'objet renvoyé en cas d'erreur
	res.status(200).send(d.data);
}

let list = function(req, res) { 
	dao.Article.list()
	.then( (d) => { send_response(d, res) })
	.catch( (d) => { send_response(d, res) });
};

let get = function(req, res) {};

let create = function(req, res) {
	dao.Article.create(req.body)
	.then( (d) => { send_response(d, res) })
	.catch( (d) => { send_response(d, res) });
};

let update = function(req, res) {};

let remove = function(req, res) {};

module.exports = {
	// req.body = json de la requete
	// req.params = parametres de la route
	list: list,
	create: create,
	update: update,
	remove: remove
};