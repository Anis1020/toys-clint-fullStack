import React from "react";
import { Link } from "react-router-dom";

const Avengers = ({ avenger }) => {
  return (
    <div>
      <div className="card w-96 h-100% bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={avenger?.photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toy Name: {avenger?.toyName}</h2>
          <h2 className="card-title">Price: {avenger?.price}</h2>
          <h2 className="card-title">Rating: {avenger?.rating}</h2>

          <div className="card-actions">
            <Link to={`/viewDetails/${avenger._id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avengers;
