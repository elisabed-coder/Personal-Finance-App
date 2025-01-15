import React, { useEffect, useState } from "react";
import { Button, Dialog, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import BudgetForm from "./BudgetForm";
import { useAuth } from "../Context/useAuth";
import { IoCloseSharp } from "react-icons/io5";
import PageHeader from "../ReusableComponents/PageHeder";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function BudgetsComponent() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [budgets, setBudgets] = useState([]);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    maximum_spend: "",
    theme_color: "",
  });

  const { email, isLoggedIn } = useAuth(); // Access email and login state from AuthProvider

  const handleOpen = () => setOpen((cur) => !cur);

  const fetchChoices = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/budget/choices/");
      const data = await response.json();
      setCategories(data.categories || []);
      setThemes(data.theme_colors || []);
    } catch (error) {
      toast.error(error, "Please try again.");
    }
  };

  const fetchBudgets = async () => {
    try {
      if (!email) {
        toast.error("User email is not available");
        navigate("/");
        return;
      }

      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_budgets/",
        {
          params: { user_email: email },
        }
      );

      if (response.data.success) {
        setBudgets(response.data.budgets);
      } else {
        toast.error("No budgets found:", response.data.message);
      }
    } catch (error) {
      toast.error("Error fetching budgets:", error);
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
    if (!email) {
      toast.error("Please log in to create a budget.");
      return;
    }

    try {
      const requestData = {
        ...formData,
        api_user: email,
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/create_budget/",
        requestData
      );

      if (res.data.success) {
        console.log("Budget created successfully");
        setBudgets(res.data.budgets);
        handleOpen(); // Close dialog on success
        fetchBudgets(); // Refresh budgets after creation
      } else {
        toast.error(
          res.data.message || "Failed to create budget. Please try again."
        );
      }
    } catch (error) {
      toast.error(`Error creating budget: ${error.message || error}`);
    }
  };

  useEffect(() => {
    fetchChoices();
    fetchBudgets();
  }, [open]); // Depend on email to refetch budgets when the user changes

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setFormData({
        category: "",
        maximum_spend: "",
        theme_color: "",
      });
    }
  }, [open]);

  if (!isLoggedIn) {
    return (
      <Typography color="red" className="text-center">
        Please log in to create a budget.
      </Typography>
    );
  }

  return (
    <>
      <div className="flex flex-col">
        <div>
          <PageHeader
            headerText="Budgets"
            buttonText="Add new budget"
            buttonFunction={handleOpen}
          />
        </div>
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
              <IoCloseSharp />
            </button>

            <BudgetForm
              formData={formData}
              categories={categories}
              themes={themes}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Card>
        </Dialog>

        {/* Render Budgets */}
        <div className="mt-6">
          <Typography variant="h5" className="mb-4">
            Your Budgets
          </Typography>
          {Array.isArray(budgets) && budgets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {budgets.map((budget, id) => (
                <Card key={id} className="p-4 shadow-md">
                  <Typography variant="h6" className="mb-2">
                    Category: {budget.category}
                  </Typography>
                  <Typography className="text-gray-600">
                    Maximum Spend: ${budget.maximum_spend}
                  </Typography>
                  <Typography
                    className="mt-2"
                    style={{ color: budget.theme_color }}
                  >
                    Theme: {budget.theme_color}
                  </Typography>
                </Card>
              ))}
            </div>
          ) : (
            <Typography color="gray">
              You haven't created any budgets yet.
            </Typography>
          )}
        </div>
      </div>
    </>
  );
}

export default BudgetsComponent;
