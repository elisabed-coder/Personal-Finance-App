import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const BudgetCard = ({ budget }) => {
  return (
    <Card className="p-4 shadow-md flex wrap">
      <div className="flex items-baseline gap-2">
        <span
          className="w-4 h-4 rounded-full"
          style={{ background: budget.theme_color }}
        ></span>
        <Typography variant="h5" className="mb-2">
          {budget.category}
        </Typography>
      </div>
      <Typography className="text-gray-600">
        Maximum of: ${budget.maximum_spend}
      </Typography>
      <div
        className="w-full h-6 rounded-sm mt-2 "
        style={{ background: budget.theme_color }}
      ></div>
      <div className="h-10 flex justify-between mt-2">
        <div className="h-full flex items-center">
          <span
            className="w-2 h-full"
            style={{ background: budget.theme_color }}
          ></span>
          <div>
            <Typography className="text-gray-600">Spent</Typography>
            <Typography className="">${budget.maximum_spend}</Typography>
          </div>
        </div>
        <div className="h-full flex items-center gap-3">
          <span
            className="w-2 h-full"
            style={{ background: budget.theme_color }}
          ></span>
          <div>
            <Typography className="text-gray-600">Free</Typography>
            <Typography className="">${budget.maximum_spend}</Typography>
          </div>
        </div>{" "}
      </div>
    </Card>
  );
};

export default BudgetCard;
