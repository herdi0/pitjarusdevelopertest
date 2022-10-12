'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store.init({
    store_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    store_name: DataTypes.STRING,
    accoutn_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER,
    is_active: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'store',
    freezeTableName: true,
    timestamps: false,
  });
  return store;
};