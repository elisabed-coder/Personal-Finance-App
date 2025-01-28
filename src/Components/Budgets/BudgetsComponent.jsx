import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useAuth } from "../Context/useAuth";
import PageHeader from "../ReusableComponents/PageHeder";
import BudgetList from "./BudgetList";
import MyResponsivePie from "./BudgetPieChart";
import BudgetForm from "./BudgetForm";

function BudgetsComponent() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useAuth();

  if (!isLoggedIn) {
    return (
      <Typography color="red" className="text-center">
        Please log in to create a budget.
      </Typography>
    );
  }

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col ">
      <PageHeader
        headerText="Budgets"
        buttonText="Add new budget"
        buttonFunction={handleOpen}
      />

      <div
        className="mt-6 flex flex-col lg:flex-row w-full justify-around gap-10 px-32
      "
      >
        <>
          <MyResponsivePie />
          <BudgetList />
        </>
      </div>
      <BudgetForm handleOpen={handleOpen} open={open} />
    </div>
  );
}

export default BudgetsComponent;
