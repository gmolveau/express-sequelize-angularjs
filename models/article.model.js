module.exports = function(sequelize, DataTypes){
	
	const Article = sequelize.define("article", { 
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		contenu: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	},{
        timestamps: false // rajoute les champs created_at et updated_at
    });

	return Article;
};
