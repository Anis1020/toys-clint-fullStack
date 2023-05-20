import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleToy = ({ toy, handleDelete }) => {
  const { seller, category, price, quantity, toyName, _id, photo } = toy;
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
            <Link to={`/viewDetails/${_id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>

            {/* <a href="#my-modal-2" className="btn">
                View Details{" "}
              </a> */}

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

      {/* modal start here */}
      {/* <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <img src={photo} alt="" />
          <h3 className="font-bold text-lg">seller name: {seller}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              close
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleToy;
