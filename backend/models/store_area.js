'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store_area.init({
    area_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    area_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store_area',
    freezeTableName: true,
    timestamps: false,
  });
  return store_area;
};