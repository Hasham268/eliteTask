import React, { useState } from "react";
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { FaWallet } from "react-icons/fa";

const ProductCard = ({ product, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const userData = {
    name: name,
    email: email,
    productName: product.name,
    rating: rating,
  };

  const handleStarClick = (currentRating) => {
    setIsModalOpen(true);
    setRating(currentRating);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/createUserAndProduct", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });

    handleModalClose();
  };

  return (
    <div className="w-70">
      <div className=" m-2 p-4 bg-pink-50 hover:border-dashed border-2 hover:border-pink-800">
        <div key={index}>
          <h3 className="font-bold mb-2 text-md">{product.name}</h3>
          <p className="text-sm ">{product.description}</p>
        </div>

        <div className="flex py-4 ">
          <span className="mr-28 mx-4 text-blue-900 font-semibold flex ">
            <FaWallet size={18} className="mt-1 mr-1"/>{product.price}$
          </span>

          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label>
                <input
                  className="hidden "
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => handleStarClick(currentRating)}
                />
                <FaStar
                  className="star "
                  size={22}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}

          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            className="modal bg-pink-100 w-1/2 m-auto"
          >
            <button
              onClick={handleModalClose}
              className="absolute top-30 right-10 bg-pink-800 text-white p-2 mr-80 my-2"
            >
              Close
            </button>
            <form onSubmit={handleFormSubmit} className="p-8 my-24">
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border p-2"
                />
              </label>
              <br />
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border p-2"
                />
              </label>
              <br />
              <button type="submit" className="bg-pink-800 text-white p-2">
                Submit
              </button>
            </form>
          </Modal>
        </div>

        <button className="cursor-pointer text-pink-800 p-2 border-2 border-pink-800 hover:bg-pink-800 hover:text-white">
          Show Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
