import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthCard from "../../ReusableComponents/AuthCard";
import { Input, Button, Typography } from "@material-tailwind/react";

const ResetPasswordComponent = () => {
  const URL = "http://127.0.0.1:8000/api/resetPassword/";
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const handleResetPassword = async (ev) => {
    ev.preventDefault();
    const newpassword = ev.target.newpassword.value;
    const confirmpassword = ev.target.confirmpassword.value;

    if (newpassword !== confirmpassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const formData = { id: id, token: token, password: newpassword };

    try {
      const res = await axios.post(URL, formData);
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Error resetting password:", err);
      toast.error("An error occurred while resetting the password.");
    }
  };

  return (
    <AuthCard
      title="Reset Password"
      subtitle="Enter your new password to reset it."
    >
      <ToastContainer />
      <form className="mt-8 w-full max-w-md" onSubmit={handleResetPassword}>
        <div className="mb-1 flex flex-col gap-4 text-left">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            htmlFor="newpassword"
          >
            New Password
          </Typography>
          <Input
            id="newpassword"
            name="newpassword"
            type="password"
            placeholder="New Password"
            required
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />

          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </Typography>
          <Input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            required
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Submit
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Not yet registered?{" "}
          <a href="/register" className="font-medium text-gray-900">
            Register Here
          </a>
        </Typography>
      </form>
    </AuthCard>
  );
};

export default ResetPasswordComponent;
