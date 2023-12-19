import React, { useState, useEffect } from "react";
import axios from "axios";
import Star from "../components/Star.jsx";
import { Link } from "react-router-dom";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios
      .get("http://localhost:5000/api/usersWithProducts")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="p-12">
      <h2 className="font-bold text-xl text-left mx-4">LIST OF PRODUCTS: </h2>
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead className=" bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Rating</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-4 px-6 ">{user.name}</td>
                <td className="py-4 px-6 ">{user.email}</td>
                <td className="py-4 px-6 ">{user.productName}</td>
                <td className="py-4 px-6 ">
                  <Star stars={user.rating} />
                </td>
                <td className="py-4 px-6 ">
                  <span className="cursor-pointer text-white bg-pink-800 p-2">
                    View Detail
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" my-6">
          <Link
            className="cursor-pointer text-white bg-pink-800 p-2"
            to="/"
          >
            Previous Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
