import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUpComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [apiErrors, setApiErrors] = useState({});

  const onSubmit = async (data) => {
    const { username, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setApiErrors({ general: "Passwords do not match" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        username,
        email,
        password,
        password2: confirmPassword,
      });
      setSuccessMessage("Registration successful");
      setApiErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        setApiErrors(error.response.data);
      } else {
        setApiErrors({ general: "Error during registration" });
      }
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p>{errors.username.message}</p>}
          {apiErrors.username && <p>{apiErrors.username}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          {apiErrors.email && <p style={{ color: "red" }}>{apiErrors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("terms", { required: true })} />
            I agree to the terms and conditions
          </label>
          {errors.terms && <p>You must accept the terms</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      {apiErrors.general && <p>{apiErrors.general}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default SignUpComponent;
