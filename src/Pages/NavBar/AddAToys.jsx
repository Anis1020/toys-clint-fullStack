import React, { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider";

const AddAToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const toyInfo = {
      seller,
      toyName,
      category,
      price,
      quantity,
      photo,
      email: user?.email,
    };
    console.log(toyInfo);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddToys}>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller</span>
            </label>
            <input type="text" name="seller" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <select name="category" id="">
              <option value="marvel">Marvel</option>
              <option value="avengers">Avengers</option>
              <option value="transformers">Transformers</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              name="photo"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add A Toy</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAToys;
