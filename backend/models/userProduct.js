import Sequelize from "sequelize";
import sequelize from "../config/database.js";

const UserProduct = sequelize.define("UserProduct", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default UserProduct;
