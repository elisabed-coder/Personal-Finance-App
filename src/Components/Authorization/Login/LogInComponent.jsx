import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import AuthCard from "../authCard";

function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token);
      navigate("/home");
    } catch (error) {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <AuthCard
      title="Log In"
      subtitle="Nice to meet you! Enter your details to Log in."
    >
      <div className="mb-1 flex flex-col gap-4 text-left">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Password
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="Password"
          id="password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button className="mt-6" fullWidth type="submit" onClick={handleLogin}>
        Login
      </Button>
      {errorMessage && (
        <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
      )}
      <Typography color="gray" className="mt-4 text-center font-normal">
        Need to create an account?{" "}
        <a href="/SignUp" className="font-medium text-gray-900">
          Sign Up
        </a>
      </Typography>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Forgot Password?{" "}
        <a href="/ForgotPassword" className="font-medium text-gray-900">
          Click Here.
        </a>
      </Typography>
    </AuthCard>
  );
}

export default LogInComponent;
