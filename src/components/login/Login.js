import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container mx-auto d-flex justify-content-center align-items-center">
        <span className="reachio-logo my-4">
          <img src="assets/logo.png" alt="" />
        </span>
      </div>
      <div className="form my-5 border rounded">
        <input
          type="text"
          placeholder="username"
          className="container border border-0 rounded"
        />
        <input
          type="password"
          placeholder="password"
          className="container border border-0 rounded"
        />
        <button className="container text-white rounded border border-0">
          login to dashboard
        </button>
        <p className="message">
          Not registered? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
