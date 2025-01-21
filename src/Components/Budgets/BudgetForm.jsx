import React from "react";
import {
  Button,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
  Dialog,
  Card,
} from "@material-tailwind/react";
import { IoCloseSharp } from "react-icons/io5";
import { useBudget } from "../Context/BudgetContext";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Context/useAuth";

function BudgetForm({ open, handleOpen, handleOpenForm, budget = null }) {
  const {
    formData,
    setFormData,
    categories,
    themes,
    createBudget,
    updateBudget,
    handleInputChange,
  } = useBudget();

  const { email } = useAuth();

  useEffect(() => {
    if (budget) {
      setFormData({
        category: budget.category || "",
        maximum_spend: budget.maximum_spend || "",
        theme_color: budget.theme_color || "",
      });
    } else {
      setFormData({
        category: "",
        maximum_spend: "",
        theme_color: "",
      });
    }
  }, [budget, setFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget) {
      // Make sure only non-empty values are sent
      const updatedFields = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== "")
      );
      updateBudget(budget.id, updatedFields, email);
    } else {
      createBudget(e);
    }
    handleOpen();
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      dismiss={{
        enabled: true,
        escapeKey: true,
        outsidePress: true,
      }}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem] bg-white">
        <button
          onClick={handleOpen}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <IoCloseSharp />
        </button>

        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              {budget ? "Edit Budget" : "Add New Budget"}
            </Typography>

            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              {budget
                ? "Modify the selected budget details."
                : "Choose a category to set a spending budget. These categories can help you monitor spending."}
            </Typography>

            <div className="space-y-2">
              <Typography variant="h6">Category</Typography>
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
            </div>

            <div className="space-y-2">
              <Typography variant="h6">Maximum Spend</Typography>
              <Input
                label="Maximum spend"
                size="lg"
                type="number"
                value={formData.maximum_spend}
                onChange={(e) =>
                  handleInputChange(e.target.value, "maximum_spend")
                }
              />
            </div>

            <div className="space-y-2">
              <Typography variant="h6">Theme</Typography>
              <Select
                size="md"
                label="Select a theme"
                value={formData.theme_color}
                onChange={(value) => handleInputChange(value, "theme_color")}
              >
                {themes.map(([value, label]) => (
                  <Option key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: value }}
                      />
                      {label}
                    </div>
                  </Option>
                ))}
              </Select>
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              {budget ? "Update" : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
}

export default BudgetForm;
