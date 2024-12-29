import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

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
      console.log("Login successful:", response.data);
      localStorage.setItem("authToken", response.data.token);
      navigate("/home");
    } catch (error) {
      setErrorMessage("Invalid credentials");
      console.error("Error logging in:", error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Log In
      </Typography>
      <form onSubmit={handleLogin} className="mt-8 w-full max-w-md">
        <div className="mb-1 flex flex-col gap-4 text-left">
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            placeholder="Email"
            value={email}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
            placeholder="Confirm Password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Login
        </Button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <Typography color="gray" className="mt-4 text-center font-normal">
        Need to create an account?
        <a href="/SignUp" className="font-medium text-gray-900">
          Sign Up
        </a>
      </Typography>
    </Card>
  );
}

export default LogInComponent;
