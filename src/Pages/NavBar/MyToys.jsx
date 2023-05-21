import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  // console.log(myToys);
  const url = `https://assignment-11-server-site-kappa.vercel.app/mytoys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div className=" shadow-2xl grid md:grid-cols-3 my-8 gap-8">
      {myToys.map((toy) => (
        <div
          className="card card-compact  w-full bg-base-100 shadow-xl"
          key={toy._id}
        >
          <figure>
            <img src={toy?.photo} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Price: ${toy?.price}</h2>
            <p>Quantity: {toy?.quantity}</p>
            <p>Description: {toy?.description}</p>
            <div className="card-actions justify-around my-5">
              {/* {`/update/:${toy._id}`} */}
              <Link to="/update">
                <button className="btn btn-primary">Edit Now</button>
              </Link>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyToys;
