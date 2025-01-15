import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useAuth } from "../Context/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageHeader from "../ReusableComponents/PageHeder";
import BudgetDialog from "./BudgetDialog";
import BudgetList from "./BudgetList";
import BudgetPieChart from "./BudgetCard";

function BudgetsComponent() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [spend, setBudgetSpend] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    maximum_spend: "",
    theme_color: "",
  });

  const { email, isLoggedIn } = useAuth();

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
      const requestData = { ...formData, api_user: email };
      const res = await axios.post(
        "http://127.0.0.1:8000/api/create_budget/",
        requestData
      );
      if (res.data.success) {
        setBudgets(res.data.budgets);
        handleOpen();
        fetchBudgets();
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
  }, [open]);

  useEffect(() => {
    if (!open) {
      setFormData({ category: "", maximum_spend: "", theme_color: "" });
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
    <div className="flex flex-col">
      <PageHeader
        headerText="Budgets"
        buttonText="Add new budget"
        buttonFunction={handleOpen}
      />
      <BudgetDialog
        open={open}
        handleOpen={handleOpen}
        formData={formData}
        categories={categories}
        themes={themes}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <div className="mt-6 flex w-full">
        {/* <BudgetPieChart budgets={budgets} /> */}
        <BudgetList budgets={budgets} />
      </div>
    </div>
  );
}

export default BudgetsComponent;
