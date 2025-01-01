import axios from "axios";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../../ReusableComponents/AuthCard";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const RegisterComponent = () => {
  const URL = "http://127.0.0.1:8000/api/register/";
  let navigate = useNavigate();

  const handleRegister = async (ev) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const confirmpassword = ev.target.confirmpassword.value;
    const acceptTerms = ev.target.acceptTerms.checked;

    if (!acceptTerms) {
      toast.error("You must accept the Terms and Conditions!");
      return;
    }
    if (password !== confirmpassword) toast.error("Passwords do not match !");
    else {
      const formData = {
        name: name,
        email: email,
        password: password,
      };
      try {
        const res = await axios.post(URL, formData);
        const data = res.data;
        if (data.success) {
          toast.success(data.message);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.log("Some error occured", err);
      }
    }
  };

  return (
    <form
      title="Sign Up"
      subtitle="Nice to meet you! Enter your details to register."
      action="POST"
      onSubmit={handleRegister}
    >
      <div className="mb-1 flex flex-col gap-4 text-left">
        <ToastContainer />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Name
        </Typography>
        <Input
          size="lg"
          type="text"
          placeholder="name"
          id="name"
          name="name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          required
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          required
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
          required
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Confirm Password
        </Typography>
        <Input
          type="password"
          size="lg"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          required
        />

        <Checkbox
          id="acceptTerms"
          name="acceptTerms"
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900 ml-1"
              >
                Terms and Conditions required
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

        <Button className="mt-6" fullWidth type="submit">
          Sign Up
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/" className="font-medium text-gray-900">
            Log In
          </a>
        </Typography>
      </div>
    </form>
  );
};

export default RegisterComponent;
