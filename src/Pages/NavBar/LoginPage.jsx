import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider";

const LoginPage = () => {
  const [error, setError] = useState("");
  const { loginUser, createUserByGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log("wrig info", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("wrong information", error);
      });
  };

  const handleGoogleSignUp = () => {
    createUserByGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card-body w-6/12 m-auto shadow-2xl bg-slate-300 my-5 rounded">
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="text"
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
              type="text"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-black">
          Are you new to this website?{" "}
          <Link className="btn btn-link" to="/registration">
            Register
          </Link>{" "}
        </p>
        <div className="divider text-white rounded bg-black">OR</div>
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-wide btn-outline text-black m-auto"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
