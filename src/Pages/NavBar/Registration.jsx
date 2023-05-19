import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = {
      email,
      password,
      photo,
    };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card-body w-6/12 m-auto shadow-2xl bg-slate-300 my-5 rounded">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              type="text"
              required
              name="Name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
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
              required
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-black">Photo</span>
            </label>
            <input
              type="url"
              name="photo"
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
