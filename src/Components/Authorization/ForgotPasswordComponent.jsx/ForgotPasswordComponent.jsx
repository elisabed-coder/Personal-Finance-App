import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Typography } from "@material-tailwind/react";
import AuthCard from "../authCard";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/forgotPassword",
        { email }
      );
      if (response.data.success) {
        setMessage(response.data.message);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message);
        setMessage("");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      setMessage("");
    }
  };

  return (
    <Card color="transparent" shadow={true} className="p-6">
      <ToastContainer />
      <Typography variant="h4" color="blue-gray">
        Forgot Password{" "}
      </Typography>
      <form action="post" onSubmit={handleSubmit}>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your email to reset your password.
        </Typography>

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          type="email"
          placeholder="Enter your email"
          value={email}
          id="email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="mt-6" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ForgotPasswordComponent;
