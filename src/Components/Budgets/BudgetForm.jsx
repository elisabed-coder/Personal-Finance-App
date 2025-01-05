// BudgetForm.js
import React from "react";
import {
  Button,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

function BudgetForm({
  formData,
  categories,
  themes,
  error,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h4" color="blue-gray">
          Add New Budget
        </Typography>
        <Typography
          className="mb-3 font-normal"
          variant="paragraph"
          color="gray"
        >
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </Typography>
        {error && (
          <Typography color="red" className="text-center">
            {error}
          </Typography>
        )}
        <Typography className="-mb-2" variant="h6">
          Category
        </Typography>
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
        <Typography className="-mb-2" variant="h6">
          Maximum Spend
        </Typography>
        <Input
          label="Maximum spend"
          size="lg"
          type="number"
          value={formData.maximum_spend}
          onChange={(e) => handleInputChange(e.target.value, "maximum_spend")}
        />
        <Typography className="-mb-2" variant="h6">
          Theme
        </Typography>
        <Select
          size="lg"
          label="Select a theme"
          value={formData.theme_color}
          onChange={(value) => handleInputChange(value, "theme_color")}
        >
          {themes.map(([value, label]) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth type="submit">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
}

export default BudgetForm;
