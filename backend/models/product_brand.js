'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.product, {foreignKey: "brand_id"})
    }
  }
  product_brand.init({
    brand_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    brand_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_brand',
    freezeTableName: true,
    timestamps: false,
  });
  return product_brand;
};