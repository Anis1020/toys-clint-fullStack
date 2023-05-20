import React, { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const toyInfo = {
      seller,
      toyName,
      category,
      description,
      price,
      quantity,
      rating,
      photo,
      email: user?.email,
    };
    console.log(toyInfo);

    fetch("https://assignment-11-server-site-kappa.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Your toy is added successfully!");
      });
  };

  return (
    <div>
      <form onSubmit={handleAddToys}>
        <div className="card-body grid md:grid-cols-2">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add a Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              className="input input-bordered"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              name="photo"
              required
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              required
              className="input input-bordered "
            />
          </div>
        </div>

        <div className="form-control my-6 px-8">
          <button className="btn btn-primary">Add A Toy</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAToys;
