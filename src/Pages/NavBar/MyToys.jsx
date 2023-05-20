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
    <div className="flex shadow-2xl ">
      {myToys.map((toy) => {
        return (
          <div className="card card-compact gap-10 m-5 w-96 bg-base-100 shadow-xl">
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
        );
      })}
    </div>
  );
};

export default MyToys;
