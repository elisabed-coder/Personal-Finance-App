import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Typography } from "@material-tailwind/react";
import AuthCard from "../../ReusableComponents/AuthCard";
import { toast, ToastContainer } from "react-toastify";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/forgotPassword/",
        { email }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <AuthCard
      title="Forgot Password"
      subtitle="Enter your email to reset your password."
    >
      <ToastContainer />
      <div className="mb-1 flex flex-col gap-4 text-left">
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
        <Button className="mt-6" fullWidth type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </AuthCard>
  );
};

export default ForgotPasswordComponent;
