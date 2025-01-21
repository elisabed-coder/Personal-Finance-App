import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import ConfirmationPopup from "../ReusableComponents/ConfirmationPopup";
import { useBudget } from "../Context/BudgetContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../Context/useAuth";
import BudgetForm from "./BudgetForm";

const BudgetCard = ({ budget }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const { email } = useAuth();
  const { budgets, fetchBudgets } = useBudget();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDelete = () => {
    setShowPopup(true);
  };

  const handleOpenForm = () => {
    setSelectedBudget(budget);
    setOpenForm(true);
  };

  const confirmDelete = async () => {
    try {
      if (!budget.id || !email) {
        toast.error("Invalid budget or user not logged in.");
        return;
      }

      const response = await axios.delete(
        `http://127.0.0.1:8000/api/deleteBudget/`,
        {
          params: { budget_id: budget.id, user_email: email },
        }
      );

      if (response.data.success) {
        toast.success("Budget deleted successfully!");
        fetchBudgets();
      } else {
        toast.error(response.data.message || "Failed to delete budget.");
      }
    } catch (error) {
      toast.error("Error deleting budget: " + error.message);
    } finally {
      setShowPopup(false);
    }
  };

  const cancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Card className="p-6 shadow-md flex wrap ">
        <div className="flex justify-between">
          <div className="flex items-baseline gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ background: budget.theme_color }}
            ></span>
            <Typography variant="h5" className="mb-2">
              {budget.category}
            </Typography>
          </div>
          <div className="cursor-pointer">
            <BsThreeDots onClick={toggleMenu} />
            {menuOpen && (
              <div className="absolute right-0 bg-white shadow-md p-2 flex flex-col">
                <span onClick={handleOpenForm}>Edit Budget</span>
                <span onClick={handleDelete}>Delete Budget</span>
              </div>
            )}
          </div>
        </div>
        <Typography className="text-gray-600">
          Maximum of: ${budget.maximum_spend}
        </Typography>
        <div
          className="w-full h-6 rounded-md mt-2"
          style={{ background: budget.theme_color }}
        ></div>
        <div className="h-10 flex justify-between mt-4">
          <div className="h-full flex items-center gap-3">
            <span
              className="w-1 h-full rounded-sm"
              style={{ background: budget.theme_color }}
            ></span>
            <div>
              <Typography className="text-gray-600">Spent</Typography>
              <Typography className="">${budget.maximum_spend}</Typography>
            </div>
          </div>
          <div className="h-full flex items-center gap-3">
            <span
              className="w-1 h-full rounded-sm"
              style={{ background: budget.theme_color }}
            ></span>
            <div>
              <Typography className="text-gray-600">Free</Typography>
              <Typography className="">${budget.maximum_spend}</Typography>
            </div>
          </div>{" "}
        </div>
      </Card>
      {showPopup && (
        <ConfirmationPopup
          message="Are you sure you want to delete this budget?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      <BudgetForm
        handleOpenForm={setOpenForm}
        open={openForm}
        handleOpen={() => setOpenForm(false)}
        budget={selectedBudget}
      />{" "}
    </div>
  );
};

export default BudgetCard;
