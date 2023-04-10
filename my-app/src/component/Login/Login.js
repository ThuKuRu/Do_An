import React, { useState , useEffect} from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Home from "../Home";

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
      document.getElementById("email").style.borderColor = "red";
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
        document.getElementById("email").style.borderColor = "red";
      }
    }

    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
      document.getElementById("password").style.borderColor = "red";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChangeLogin = (event) => {
    const { value, name } = event.target;
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
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email" className="form-label-login">
                    Email
                  </label>
                </td>
                <td>
                  <input
                    id="email"
                    className="form-control-login"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handleChangeLogin}
                  />
                  
                </td>
                <td>
                {formError.email && (
                    <div className="error-feedback" style={{display: 'block'}}>{formError.email}</div>
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="password" className="form-label-login">
                    Password
                  </label>
                </td>
                <td>
                  <input
                    id="password"
                    className="form-control-login"
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChangeLogin}
                  />
                 
                </td>
                <td>
                {formError.password && (
                    <div className="error-feedback" style={{display: 'block'}}>{formError.password}</div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="submit-btn" onSubmit={handleSubmitLogin}>
          Login
          </button>
          <a href="#">Forgotten password?</a>
          <button type="submit" className="submit-btn-login">
          <Link to="/register" className="register"> Register</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
