import React from "react";
import { Typography } from "@material-tailwind/react";
import BudgetCard from "./BudgetCard";

const BudgetList = ({ budgets }) => {
  return (
    <>
      <Typography variant="h5" className="mb-4">
        Your Budgets
      </Typography>
      {Array.isArray(budgets) && budgets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget, id) => (
            <BudgetCard key={id} budget={budget} />
          ))}
        </div>
      ) : (
        <Typography color="gray">
          You haven't created any budgets yet.
        </Typography>
      )}
    </>
  );
};

export default BudgetList;
