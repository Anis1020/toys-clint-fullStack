import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy";
import { toast } from "react-toastify";

const AllToys = () => {
  const allToy = useLoaderData();
  const [alltoys, setAllToys] = useState(allToy);

  const handleDelete = (id) => {
    fetch(`https://assignment-11-server-site-kappa.vercel.app/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Your item deleted successfully", result);
        if (result.deletedCount > 0) {
          const remaining = allToy.filter((toys) => toys._id !== id);
          setAllToys(remaining);
        }
      });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {alltoys.map((toy, index) => (
            <SingleToy
              key={allToy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></SingleToy>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllToys;
