'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product_brand, {foreignKey: 'brand_id'})
    }
  }
  product.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    product_name: DataTypes.STRING,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    freezeTableName: true,
    timestamps: false,
  });
  return product;
};