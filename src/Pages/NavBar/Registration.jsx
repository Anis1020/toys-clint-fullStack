import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="card-body w-6/12 m-auto shadow-2xl bg-slate-300 my-5 rounded">
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-black">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-black">
          Are you new to this website?{" "}
          <Link className="btn btn-link" to="/login">
            Login
          </Link>{" "}
        </p>
        <div className="divider text-white rounded bg-black">OR</div>
        <button className="btn btn-wide btn-outline text-black m-auto">
          Google
        </button>
        <button className="btn btn-wide btn-outline text-black m-auto">
          Github
        </button>
      </div>
    </div>
  );
};

export default Registration;
