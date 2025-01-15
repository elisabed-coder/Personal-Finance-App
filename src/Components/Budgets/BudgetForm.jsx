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
        <Typography className="-mb-2" variant="h6">
          Category
        </Typography>
        <Select
          size="md"
          label="Select category"
          value={formData.category}
          onChange={(value) => handleInputChange(value, "category")}
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
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
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        />
        <Typography className="-mb-2" variant="h6">
          Theme
        </Typography>
        <Select
          size="md"
          label="Select a theme"
          value={formData.theme_color}
          onChange={(value) => handleInputChange(value, "theme_color")}
          className="background-white"
        >
          {themes.map(([value, label]) => (
            <Option key={value} value={value}>
              <span className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: value }}
                ></span>
                {label}
              </span>
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
