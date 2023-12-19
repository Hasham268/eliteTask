import Product from "../models/Product.js";
import UserProduct from "../models/UserProduct.js";

export async function createProducts() {
  try {
    const productsData = [
      {
        name: "Product Management Tool",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 200,
      },
      {
        name: "Inventory Management Product",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 250,
      },
      {
        name: "Hospital Management System",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 300,
      },
    ];

    await Product.bulkCreate(productsData);

    console.log("Products created successfully!");
  } catch (error) {
    console.error("Error creating products:", error.message);
  }
}

export async function createUserAndProduct(name, email, productName, rating) {
  try {
    await UserProduct.create({
      name,
      email,
      productName,
      rating,
    });

    console.log("Records created successfully!");
  } catch (error) {
    console.error("Error creating user and product:", error.message);
    throw error;
  }
}

export async function updateProductPrices() {
  try {
    const products = await Product.findAll();

    for (const product of products) {
      const prevPrice = product.price;
      const newPrice = prevPrice * 2;
      await product.update({ price: newPrice });
    }

    console.log("Product prices updated successfully!");
  } catch (error) {
    console.error("Error updating product prices:", error.message);
  }
}


