import {
  Button,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
  Dialog,
  Card,
} from "@material-tailwind/react";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useAuth } from "../Context/useAuth";

function TransactionForm({ open, handleOpen }) {
  const { email } = useAuth();
  const [formData, setFormData] = useState({
    category: "",
    maximum_spend: "",
    theme_color: "",
    amount: "",
    description: "",
  });

  const resetForm = () => {
    setFormData({
      category: "",
      maximum_spend: "",
      theme_color: "",
      amount: "",
      description: "",
    });
  };

  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction(formData);
    handleOpen();
  };

  const createTransaction = (transactionData) => {
    console.log("Creating new transaction:", transactionData);
    // Add your API call here
    resetForm();
  };

  const categories = [
    ["food", "Food & Dining"],
    ["transport", "Transportation"],
    ["utilities", "Utilities"],
    ["entertainment", "Entertainment"],
    ["shopping", "Shopping"],
    ["other", "Other"],
  ];

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      dismiss={{
        enabled: true,
        escapeKey: true,
        outsidePress: true,
      }}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem] bg-white">
        <button
          onClick={handleOpen}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <IoCloseSharp />
        </button>

        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add New Transaction
            </Typography>

            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter the details of your new transaction.
            </Typography>

            <div className="space-y-2">
              <Typography variant="h6">Category</Typography>
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
            </div>

            <div className="space-y-2">
              <Typography variant="h6">Amount</Typography>
              <Input
                label="Amount"
                size="lg"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange(e.target.value, "amount")}
              />
            </div>

            <div className="space-y-2">
              <Typography variant="h6">Description</Typography>
              <Input
                label="Description"
                size="lg"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange(e.target.value, "description")
                }
              />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
}

export default TransactionForm;
