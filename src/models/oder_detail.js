'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oder_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order_detail.belongsTo(models.order, {
        foreignKey: "order_id",
        as: "order"
      });
      order_detail.belongsTo(models.book,{
        foreignKey: "book_id",
        as: "book"
      });
    }
  }
  oder_detail.init({
    order_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'oder_detail',
    underscored: true,
  });
  return oder_detail;
};