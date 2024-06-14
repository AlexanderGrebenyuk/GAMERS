'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, {
        foreignKey: 'themeId'
      });
    }
  }
  Question.init(
    {
      themeId: DataTypes.INTEGER,
      answer: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
