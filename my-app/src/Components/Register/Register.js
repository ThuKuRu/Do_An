import React, { useState } from "react";
import "./Register.scss";
import { MdCloudUpload } from "react-icons/md";

const Register = () => {
  const initFormValue = {
    email: "",
    name: "",
    address: "",
    gender: "",
    calendar: "",
    upload_img: "",
    password: "",
    confirmPassword: "",
  };

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };

  const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState();

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Name is required";
    }
    if (isEmptyValue(formValue.address)) {
      error["address"] = "Address is required";
    }
    if (isEmptyValue(formValue.gender)) {
      error["gender"] = "Gender is required";
    }
    if (isEmptyValue(formValue.calendar)) {
      error["calendar"] = "Calender is required";
    }
    if (isEmptyValue(formValue.upload_img)) {
      error["upload_img"] = "Upload img is required";
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Confirm password not match";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormError({});
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    formValue.gender = event.target.value;
  };

  console.log(formError);

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="component">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className={formError.email ? 'form-control-error' : 'form-control'}
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.email && (
            <div className="error-feedback">{formError.email}</div>
          )}
          </div>

          <div className="component">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              className={formError.name ? 'form-control-error' : 'form-control'}
              type="text"
              name="name"
              value={formValue.name}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.name && (
            <div className="error-feedback">{formError.name}</div>
          )}
          </div>

          <div className="component">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              id="address"
              className={formError.address ? 'form-control-error' : 'form-control'}
              type="text"
              name="address"
              value={formValue.address}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.address && (
            <div className="error-feedback">{formError.address}</div>
          )}
          </div>

          <div className="component component-gender">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <div className="gender">
              <div className="male-radio">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChangeGender}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female-radio">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChangeGender}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="validate">
          {formError.gender && (
            <div className="error-feedback">{formError.gender}</div>
          )}
          </div>

          <div className="component">
            <label htmlFor="calendar" className="form-label calendar">
              Date of Birth
            </label>
            <input
              id="calendar"
              type="date"
              name="calendar"
              className={formError.calendar ? 'form-control-error' : 'form-control'}
              min="2000-01-01"
              value={formValue.calendar}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.calendar && (
            <div className="error-feedback">{formError.calendar}</div>
          )}
          </div>

          <div className="upload_img">
            <div
              className={formError.upload_img ? "img-error" : "img"}
              onClick={() => document.querySelector("#upload_img").click()}
            >
              <input
                hidden
                id="upload_img"
                type="file"
                onChange={({ target: { files } }) => {
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                    formValue.upload_img = URL.createObjectURL(files[0]);
                  }
                }}
                accept="image/*"
              />
              {image ? (
                <img src={image} className="img-upload" alt="" />
              ) : (
                <MdCloudUpload color="#ef9fb3" size={150} />
              )}
            </div>
          </div>
          <div className="validate">
          {formError.upload_img && (
            <div className="error-feedback">{formError.upload_img}</div>
          )}
          </div>

          <div className="component">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              className={formError.password ? 'form-control-error' : 'form-control'}
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.password && (
            <div className="error-feedback">{formError.password}</div>
          )}
          </div>

          <div className="component">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              className={formError.confirmPassword ? 'form-control-error' : 'form-control'}
              type="password"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="validate">
          {formError.confirmPassword && (
            <div className="error-feedback">{formError.confirmPassword}</div>
          )}
          </div>

          <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
