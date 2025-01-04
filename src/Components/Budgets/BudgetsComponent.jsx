import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";

function BudgetsComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Add budget</Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add New Budget
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Choose a category to set a spending budget. These categories can
              help you monitor spending.{" "}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Category
            </Typography>
            <Select size="md" label="Select category">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Typography className="-mb-2" variant="h6">
              Maximum Spend
            </Typography>
            <Input label="maximum_spend" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Theme
            </Typography>
            <Select size="lg" label="Select a theme">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default BudgetsComponent;
