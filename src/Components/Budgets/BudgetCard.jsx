import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const BudgetCard = ({ budget }) => {
  return (
    <Card className="p-4 shadow-md">
      <Typography variant="h6" className="mb-2">
        Category: {budget.category}
      </Typography>
      <Typography className="text-gray-600">
        Maximum Spend: ${budget.maximum_spend}
      </Typography>
      <Typography className="mt-2" style={{ color: budget.theme_color }}>
        Theme: {budget.theme_color}
      </Typography>
    </Card>
  );
};

export default BudgetCard;
