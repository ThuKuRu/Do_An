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
      document.getElementById("email").style.borderColor = "red";
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
        document.getElementById("email").style.borderColor = "red";
      }
    }
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Name is required";
      document.getElementById("name").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.address)) {
      error["address"] = "Address is required";
      document.getElementById("address").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.gender)) {
      error["gender"] = "Gender is required";
      document.getElementById("male").style.borderColor = "red";
      document.getElementById("female").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.calendar)) {
      error["calendar"] = "Calender is required";
      document.getElementById("calendar").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.upload_img)) {
      error["upload_img"] = "Upload img is required";
      document.getElementById("upload_img").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
      document.getElementById("password").style.borderColor = "red";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm password is required";
      document.getElementById("confirm-password").style.borderColor = "red";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Confirm password not match";
      document.getElementById("confirm-password").style.borderColor = "red";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
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
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </td>
                <td>
                  <input
                    id="email"
                    className="form-control"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.email && (
                    <div className="error-feedback">{formError.email}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                </td>
                <td>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.name && (
                    <div className="error-feedback">{formError.name}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                </td>
                <td>
                  <input
                    id="address"
                    className="form-control"
                    type="text"
                    name="address"
                    value={formValue.address}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.address && (
                    <div className="error-feedback">{formError.address}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                </td>
                <td>
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    className="gender"
                    value="male"
                    onChange={handleChangeGender}
                    defaultChecked
                  />
                  <label htmlFor="male" className="male">
                    Male
                  </label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    className="gender"
                    value="female"
                    onChange={handleChangeGender}
                  />
                  <label htmlFor="female" className="female">
                    Female
                  </label>
                </td>
                <td>
                  {formError.gender && (
                    <div className="error-feedback">{formError.gender}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="calendar" className="form-label calendar">
                    Date of Birth
                  </label>
                </td>
                <td>
                  <input
                    id="calendar"
                    type="date"
                    name="calendar"
                    min="2000-01-01"
                    value={formValue.calendar}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.calendar && (
                    <div className="error-feedback">{formError.calendar}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td></td>
                <td onChange={handleChange}>
                  <div
                    id="upload_img"
                    className="upload_img"
                    onClick={() =>
                      document.querySelector("#upload_img").click()
                    }
                  >
                    <input
                      type="file"
                      name="upload_img"
                      value={formValue.upload_img}
                      onChange={({ target: { files } }) => {
                        if (files) {
                          setImage(URL.createObjectURL(files[0]));
                        }
                      }}
                      accept="image/*"
                      hidden
                    />

                    {image ? (
                      <img src={image} width={250} height={200} alt="" />
                    ) : (
                      <MdCloudUpload color="#ef9fb3" size={100} />
                    )}
                  </div>
                </td>
                <td>
                  {formError.upload_img && (
                    <div className="error-feedback">{formError.upload_img}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </td>
                <td>
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.password && (
                    <div className="error-feedback">{formError.password}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="confirm-password" className="form-label">
                    Confirm Password
                  </label>
                </td>
                <td>
                  <input
                    id="confirm-password"
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    value={formValue.confirmPassword}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  {formError.confirmPassword && (
                    <div className="error-feedback">
                      {formError.confirmPassword}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
