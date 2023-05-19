import React from "react";

const AddAToys = () => {
  return (
    <div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category</span>
          </label>
          <select name="" id="">
            <option value="marvel">Marvel</option>
            <option value="avengers">Avengers</option>
            <option value="transformers">Transformers</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add A Toy</button>
        </div>
      </div>
    </div>
  );
};

export default AddAToys;
