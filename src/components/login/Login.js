import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  // collect user input
  const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };

  let navigate = useNavigate();

  const email = useFormInput("");
  const password = useFormInput("");

  // store user input in local storage and navigate to dashboard
  const handleLogin = () => {
    if (email.value == "abc@gmail.com" && password.value == "12345") {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passworddata", "12345");
      navigate("/dashboard");
    } else {
      alert("invalid username & password");
    }
  };

  return (
    <div className="login">
      <div className="container mx-auto d-flex justify-content-center align-items-center">
        <span className="reachio-logo my-4">
          <img src="assets/logo.png" alt="" />
        </span>
      </div>
      <form className="form my-5 border rounded" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email address"
          className="container border border-0 rounded"
          {...email}
        />
        <input
          type="password"
          placeholder="password"
          className="container border border-0 rounded"
          {...password}
        />
        <button
          className="container text-white rounded border border-0"
          type="submit"
        >
          login to dashboard
        </button>
        <p className="message">
          Not registered? <a href="#">Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
