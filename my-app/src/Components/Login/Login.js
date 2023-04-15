import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const initFormValue = {
    email: "",
    password: "",
  };

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }

    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }
      setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChangeLogin = (event) => {
    const { value, name } = event.target;
    setFormError({});
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  console.log(formError);

  return (
    <div className="container-login">
      <div className="form-container-login">
        <h1 className="title-login">Login</h1>
        <form onSubmit={handleSubmitLogin}>
          <div className="component">
            <label htmlFor="email" className="form-label-login">
              Email
            </label>

            <input
              id="email"
              className={formError.email ? 'form-control-error' : 'form-control-login'}
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChangeLogin}
            />
          </div>
          <div className="validate">
          {formError.email && (
            <div className="error-feedback" style={{ display: "block" }}>
              {formError.email}
            </div>
          )}
          </div>
          <div className="component">
            <label htmlFor="password" className="form-label-login">
              Password
            </label>

            <input
              id="password"
              className={formError.password ? 'form-control-error' : 'form-control-login'}
              name="password"
              value={formValue.password}
              onChange={handleChangeLogin}
            />
          </div>
            <div className="validate">
          {formError.password && (
            <div className="error-feedback" style={{ display: "block" }}>
              {formError.password}
            </div>
          )}
            </div>

          <button
            type="submit"
            className="submit-btn"
            onSubmit={handleSubmitLogin}
          >
            Login
          </button>
          <a href="#">Forgotten password?</a>
          <button type="submit" className="submit-btn-login">
            <Link to="/register" className="register">
              {" "}
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
