import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleToy = ({ toy, handleDelete, index }) => {
  const { seller, category, price, quantity, toyName, _id, photo } = toy;

  return (
    <>
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{seller}</td>
          <td>{toyName}</td>
          <td>{category}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td className="flex justify-end">
            <Link to={`/viewDetails/${_id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
            {/* 
            <a href="#my-modal-2" className="btn">
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
      {/* <div className="modal w-full" id="my-modal-2">
        <div className="modal-box ">
          <img className="w-full " src={photo} alt="" />
          <form onSubmit={handleUpdate}>
            <div className="card-body w-full m-auto grid grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered"
                />
              </div>{" "}
            </div>
            <div className="form-control px-7">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                type="text"
                // defaultValue={description}
                className="input input-bordered"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control mt-6 px-7">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
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
