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

  const hangleSubmit = (ev) => {
    const category = ev.target.value("category");
    const maximum_spend = ev.target.value("maximum_spend");
    const theme_color = ev.target.value("theme_color");
    const formData = {
      category: category,
      maximum_spend: maximum_spend,
      theme_color: theme_color,
    };
    
  };

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
          <button onClick={handleOpen}>close</button>

          <form action="POST" onSubmit={hangleSubmit}>
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
              <Select size="md" label="Select category" name="category">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Typography className="-mb-2" variant="h6" name="maximum_spend">
                Maximum Spend
              </Typography>
              <Input label="maximum_spend" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Theme
              </Typography>
              <Select size="lg" label="Select a theme" name="theme_color">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export default BudgetsComponent;
