import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Typography, Card } from "@material-tailwind/react";
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
    <Card color="transparent" shadow={true} className="p-6">
      <Typography variant="h4" color="blue-gray">
        Forgot Password
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your email to reset your password.{" "}
      </Typography>
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
    </Card>
  );
};

export default ForgotPasswordComponent;
