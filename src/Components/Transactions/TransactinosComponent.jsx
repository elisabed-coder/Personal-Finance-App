import PageHeader from "../ReusableComponents/PageHeder";

function TransactionsComponent() {
  const handleOpen = () => {};
  return (
    <div className="flex flex-col ">
      <PageHeader
        headerText="Transactions"
        buttonText="Add New Transaction"
        buttonFunction={handleOpen}
      />{" "}
    </div>
  );
}

export default TransactionsComponent;
