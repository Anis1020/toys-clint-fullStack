import React from "react";
import { Link } from "react-router-dom";

const MarvelCategory = ({ category }) => {
  //   const { photo, toyName, price } = category;
  console.log(category);
  return (
    <>
      <div className="card w-96 h-100% bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={category?.photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category?.toyName}</h2>
          <h2 className="card-title">{category?.price}</h2>
          <h2 className="card-title">{category?.rating}</h2>

          <div className="card-actions">
            <Link to={`/viewDetails/${category._id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarvelCategory;
