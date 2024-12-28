export default function TransactionHeader() {
  return (
    <>
      <div className="transaction_container w-screen py-8 ">
        <header className="transaction_header flex justify-around  items-center ">
          <h1 className="font-bold">Transaction</h1>
          <button class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            + Add Transaction
          </button>
        </header>
      </div>
    </>
  );
}
