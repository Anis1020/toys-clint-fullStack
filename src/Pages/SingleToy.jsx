import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleToy = ({ toy, handleDelete }) => {
  const { seller, category, price, quantity, toyName, _id } = toy;
  let counts = 0;
  return (
    <>
      <tbody>
        <tr>
          <th>{counts + 1}</th>
          <td>{seller}</td>
          <td>{toyName}</td>
          <td>{category}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td className="flex justify-end">
            {" "}
            <button className="btn btn-accent">View Details</button>{" "}
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-outline ms-10"
            >
              X
            </button>
            <ToastContainer />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default SingleToy;
