import React from "react";
import { Link } from "react-router-dom";

const Transformers = ({ transformer }) => {
  return (
    <div>
      <div className="card w-96 h-100% bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={transformer?.photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toy Name: {transformer?.toyName}</h2>
          <h2 className="card-title">Price: {transformer?.price}</h2>
          <h2 className="card-title">Rating: {transformer?.rating}</h2>

          <div className="card-actions">
            <Link to={`/viewDetails/${transformer._id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformers;
