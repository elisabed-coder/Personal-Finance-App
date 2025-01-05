import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";

function BudgetsComponent() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    maximum_spend: "",
    theme_color: "",
  });
  const [error, setError] = useState("");

  const user = localStorage.getItem("email");

  const handleOpen = () => setOpen((cur) => !cur);

  const fetchChoices = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/budget/choices/");
      const data = await response.json();
      setCategories(data.categories || []);
      setThemes(data.theme_colors || []);
    } catch (error) {
      console.error("Error fetching budget choices:", error);
      setError("Failed to load categories and themes. Please try again.");
    }
  };

  const handleInputChange = (value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError("");

    if (!user) {
      setError("Please log in to create a budget.");
      return;
    }

    try {
      const requestData = {
        ...formData,
        api_user: user,
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/create_budget/",
        requestData
      );

      if (res.data.success) {
        console.log("Budget created successfully");
        handleOpen(); // Close dialog on success
      } else {
        setError(
          res.data.message || "Failed to create budget. Please try again."
        );
      }
    } catch (error) {
      console.error("Error creating budget:", error);
      setError(
        error.response?.data?.message ||
          "Failed to create budget. Please try again."
      );
    }
  };

  useEffect(() => {
    fetchChoices();
  }, []);

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setFormData({
        category: "",
        maximum_spend: "",
        theme_color: "",
      });
      setError("");
    }
  }, [open]);

  if (!user) {
    return (
      <Typography color="red" className="text-center">
        Please log in to create a budget.
      </Typography>
    );
  }

  return (
    <>
      <Button onClick={handleOpen}>Add budget</Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <button
            onClick={handleOpen}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>

          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add New Budget
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Choose a category to set a spending budget. These categories can
                help you monitor spending.
              </Typography>
              {error && (
                <Typography color="red" className="text-center">
                  {error}
                </Typography>
              )}
              <Typography className="-mb-2" variant="h6">
                Category
              </Typography>
              <Select
                size="md"
                label="Select category"
                value={formData.category}
                onChange={(value) => handleInputChange(value, "category")}
              >
                {categories.map(([value, label]) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
              <Typography className="-mb-2" variant="h6">
                Maximum Spend
              </Typography>
              <Input
                label="Maximum spend"
                size="lg"
                type="number"
                value={formData.maximum_spend}
                onChange={(e) =>
                  handleInputChange(e.target.value, "maximum_spend")
                }
              />
              <Typography className="-mb-2" variant="h6">
                Theme
              </Typography>
              <Select
                size="lg"
                label="Select a theme"
                value={formData.theme_color}
                onChange={(value) => handleInputChange(value, "theme_color")}
              >
                {themes.map(([value, label]) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export default BudgetsComponent;
