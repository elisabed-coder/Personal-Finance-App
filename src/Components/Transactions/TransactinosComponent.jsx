import TransactionHeader from "./TransactionHeader";
import TransactionTabel from "./TransactionTable";

function TransactionsComponent() {
  return (
    <div className="bg-zinc-200 h-screen">
      <TransactionHeader />
      <TransactionTabel />
    </div>
  );
}

export default TransactionsComponent;
