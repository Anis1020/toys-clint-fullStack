import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy";

const AllToys = () => {
  const [alltoys, setAllToys] = useState(true);
  const allToy = useLoaderData();
  console.log(allToy);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("successfully deleted", result);
        // const deleted = allToy.filter((toys) => toys._id != id);
        // console.log(deleted);
        // setAllToys(deleted);
      });
  };
  return (
    <>
      <h2>all toys {allToy.length}</h2>

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

          {/* <tbody>
        
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>
                {" "}
                <button className="btn btn-accent">View Details</button>{" "}
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default AllToys;
