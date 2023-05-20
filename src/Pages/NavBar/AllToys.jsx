import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy";
import { ToastContainer, toast } from "react-toastify";

const AllToys = () => {
  const [alltoys, setAllToys] = useState(true);
  const allToy = useLoaderData();
  console.log(allToy);

  // setAllToys(allToy);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast("Your item deleted successfully", result);
        if (result.deletedCount > 0) {
          const remaining = allToy.filter((toys) => toys._id !== id);
          setAllToys(remaining);
        }
        // const deleted = allToy.filter((toys) => toys._id != id);
        // console.log(deleted);
        // setAllToys(deleted);
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
          {allToy.map((toy, index) => (
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
