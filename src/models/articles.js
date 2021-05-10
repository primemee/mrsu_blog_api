/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('articles', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		classify: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0'
		},
		number: {
			type: DataTypes.INTEGER(20),
			allowNull: true,
			defaultValue: '0'
		},
		create_time: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		update_time: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'articles',
		timestamps: false
	});
};
