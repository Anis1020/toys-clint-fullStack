import React from "react";

const MarvelCategory = ({ category }) => {
  return (
    <>
      <div className="card w-96 h-100% bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={category?.photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarvelCategory;
