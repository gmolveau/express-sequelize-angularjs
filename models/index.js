const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require("../database/config.json");
const current_config = config[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);
let db = {};

let Article = sequelize.import("./article");
db["Article"] = Article;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;