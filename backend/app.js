import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import Product from "./models/Product.js";
import {
  createProducts,
  createUserAndProduct,
  updateProductPrices,
} from "./controllers/controller.js";
import UserProduct from "./models/UserProduct.js";

const app = express();

sequelize.sync().then(() => {
  //seeding database with feature products
  createProducts();

  //update product price logic
  const updateInterval = 24 * 60 * 60 * 1000;
  setInterval(updateProductPrices, updateInterval);
  
  app.use(express.json());
  app.use(cors());

  app.get("/api/products", async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: ["name", "description", "price"],
      });

      res.json(products);
    } catch (error) {
      console.error("Error fetching product data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.post("/api/createUserAndProduct", async (req, res) => {
    const { name, email, productName, rating } = req.body;

    try {
      await createUserAndProduct(name, email, productName, rating);
      res.json({
        success: true,
        message: "User and Product created successfully!",
      });
    } catch (error) {
      console.error("Error creating User and Product:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });

  app.get("/api/usersWithProducts", async (req, res) => {
    try {
      const userProducts = await UserProduct.findAll({
        attributes: ["name", "email", "productName", "rating"],
      });

      res.json(userProducts);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
