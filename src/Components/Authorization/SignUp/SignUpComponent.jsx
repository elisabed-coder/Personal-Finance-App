import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

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
      await axios.post("http://localhost:8000/api/register/", {
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
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-md">
        <div className="mb-1 flex flex-col gap-4 text-left">
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Your Name
          </Typography>
          <Input
            size="lg"
            type="text"
            placeholder="Username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("username", { required: "Username is required" })}
          />{" "}
          {errors.username && (
            <p className="text-red-500 text-sm text-right">
              {errors.username.message}
            </p>
          )}
          {apiErrors.username && <p>{apiErrors.username}</p>}{" "}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            placeholder="Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-right">
              {errors.email.message}
            </p>
          )}
          {apiErrors.email && (
            <p className="text-red-500 text-sm text-right">{apiErrors.email}</p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="Password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirm Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="Confirm Password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <Checkbox
            {...register("terms", { required: true })}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {errors.terms && (
            <p className="text-red-500 text-sm text-right">
              You must accept the terms
            </p>
          )}
          <Button className="mt-6" fullWidth type="submit">
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </div>
      </form>

      {apiErrors.general && (
        <p className="text-red-500 text-sm">{apiErrors.general}</p>
      )}
      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}
    </Card>
  );
}

export default SignUpComponent;
