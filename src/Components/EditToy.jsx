import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditToy = () => {
  // const id = useParams();
  const updateData = useLoaderData();
  //   console.log(updateData.map((update) => <span>{update.toyName}</span>));
  console.log(updateData);

  // const handleUpdate = (event) => {
  //   event.preventDefault();
  //   const form = event.value;
  //   const price = form.price.value;
  //   const quantity = form.quantity.value;
  //   const description = form.description.value;
  //   const updateData = {
  //     price,
  //     quantity,
  //     description,
  //   };
  //   fetch(`http://localhost:5000/updateToy/${alltoys._id}`, {
  //     method: "PATCh",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(updateData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <form>
        <div className="card-body w-6/12 m-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name=""
              type="text"
              className="input input-bordered"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditToy;
