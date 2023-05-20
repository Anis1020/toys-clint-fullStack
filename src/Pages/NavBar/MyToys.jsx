import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routers/AuthProvider";

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
    <div className=" shadow-2xl grid md:grid-cols-3 gap-8">
      {myToys.map((toy) => (
        <div className="card card-compact  w-full bg-base-100 shadow-xl">
          <figure>
            <img src={toy?.photo} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{toy?.seller}</h2>
            <p>{toy?.toyName}</p>
            <p>price: ${toy?.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Edit Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyToys;
