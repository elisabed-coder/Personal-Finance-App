import React from "react";
import { Typography } from "@material-tailwind/react";
import BudgetCard from "./BudgetCard";
import { useBudget } from "../Context/BudgetContext";

const BudgetList = () => {
  const { budgets, loading } = useBudget();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      {Array.isArray(budgets) && budgets.length > 0 ? (
        <div className="flex flex-col gap-6 w-3/6">
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
