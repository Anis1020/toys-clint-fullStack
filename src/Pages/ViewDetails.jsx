import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Routers/AuthProvider";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const id = useParams();
  const singleData = useLoaderData();
  const {
    seller,
    toyName,
    category,
    description,
    price,
    quantity,
    rating,
    photo,
    email,
  } = singleData;
  console.log(singleData);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-8 ">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Seller Name: {seller}</h2>
          <h2 className="card-title">Toy Name: {toyName}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <h2 className="card-title">Available Quantity: {quantity}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <h2 className="card-title">Seller Email: {email}</h2>

          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
