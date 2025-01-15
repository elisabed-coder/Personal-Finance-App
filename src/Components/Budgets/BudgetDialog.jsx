import React from "react";
import { Dialog, Card } from "@material-tailwind/react";
import { IoCloseSharp } from "react-icons/io5";
import BudgetForm from "./BudgetForm";

const BudgetDialog = ({
  open,
  handleOpen,
  formData,
  categories,
  themes,
  handleInputChange,
  handleSubmit,
}) => {
  return (
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
  );
};

export default BudgetDialog;
