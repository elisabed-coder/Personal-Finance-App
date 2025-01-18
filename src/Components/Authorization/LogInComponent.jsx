import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography, Card } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useAuth } from "../Context/useAuth";

const LogInComponent = () => {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const formData = { email, password };

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      const data = res.data;
      console.log(data);

      if (data.success) {
        toast.success(data.message);
        login({
          token: data.token,
          name: data.name,
          email: email,
        }); // Log the user in through context
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Card color="transparent" shadow={true} className="p-6">
      <ToastContainer />
      <Typography variant="h4" color="blue-gray">
        Log in
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Please enter your information
      </Typography>
      <form
        onSubmit={handleLogin}
        className="mb-1 flex flex-col gap-4 text-left"
      >
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Password
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="Password"
          id="password"
          name="password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Login
        </Button>
      </form>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Need to create an account?{" "}
        <a href="/register" className="font-medium text-gray-900">
          Sign Up
        </a>
      </Typography>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Forgot Password?{" "}
        <a href="/ForgotPassword" className="font-medium text-gray-900">
          Click Here.
        </a>
      </Typography>
    </Card>
  );
};

export default LogInComponent;
