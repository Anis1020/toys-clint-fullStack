import React from "react";
import errorPage from "../assets/errorpage.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-green-400 text-black text-2xl text-center  p-5 rounded">
      <img className="m-auto rounded my-4 w-6/12" src={errorPage} alt="" />
      <Link className="bg-slate-200 p-2 rounded mt-4" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
