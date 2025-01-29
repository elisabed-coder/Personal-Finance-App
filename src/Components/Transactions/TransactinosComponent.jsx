import PageHeader from "../ReusableComponents/PageHeder";
import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useAuth } from "../Context/useAuth";

function TransactionsComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { email } = useAuth();

  const handleOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/transactions/", {
        params: { user_email: email },
      });
      if (response.ok) {
        setTransactions(response.data.transactions || []);
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionAdded = () => {
    fetchTransactions();
  };

  return (
    <div className="flex flex-col space-y-6">
      <PageHeader
        headerText="Transactions"
        buttonText="+Add New Transaction"
        buttonFunction={handleOpen}
      />

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Typography color="gray">Loading transactions...</Typography>
        </div>
      ) : transactions.length === 0 ? (
        <div className="flex justify-center items-center h-32">
          <Typography color="gray">
            No transactions found. Add your first transaction!
          </Typography>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardBody>
                <div className="flex justify-between items-start mb-4">
                  <Typography variant="h6" color="blue-gray">
                    {transaction.category || "Uncategorized"}
                  </Typography>
                  <Typography
                    variant="h6"
                    color={transaction.amount < 0 ? "red" : "green"}
                  >
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </Typography>
                </div>
                <Typography variant="paragraph" color="gray" className="mb-2">
                  {transaction.description || "No description available"}
                </Typography>
                {/* <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  // {formatDate(transaction.created_at)}
                </Typography> */}
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      <TransactionForm
        open={isFormOpen}
        handleOpen={handleOpen}
        onTransactionAdded={handleTransactionAdded}
      />
    </div>
  );
}

export default TransactionsComponent;
