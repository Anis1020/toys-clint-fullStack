import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy";
import { toast } from "react-toastify";

const AllToys = () => {
  const allToy = useLoaderData();
  const [alltoys, setAllToys] = useState(allToy);
  const [searchText, setSearchText] = useState("");

  const handleDelete = (id) => {
    fetch(`https://assignment-11-server-site-kappa.vercel.app/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Your item deleted successfully", result);
        if (result.deletedCount > 0) {
          confirm("Are yuo sure delete");
          const remaining = allToy.filter((toys) => toys._id !== id);
          setAllToys(remaining);
        }
      });
  };

  const handleSearch = () => {
    fetch(
      `https://assignment-11-server-site-kappa.vercel.app/searchToy/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <>
      <div className="overflow-x-auto">
        {/* search functionality */}

        <div className="text-center my-8 space-x-4">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 rounded-full"
            type="search"
            name="search"
            id=""
            placeholder="type-here"
          />
          <input
            onClick={handleSearch}
            className="p-2 px-6 btn rounded-full"
            type="submit"
            value="Search"
          />
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Count</th>
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
              index={index}
              key={toy._id}
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
