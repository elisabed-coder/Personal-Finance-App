export default function TransactionTabel() {
  const transactions = [
    {
      recipt: "ABC Utilities",
      category: "Utilities",
      date: "12/01/2017",
      amount: "$75.00",
    },
    {
      recipt: "Rent Payment ",
      category: "Housing",
      date: "2023-10-03",
      amount: "$1,200.00",
    },
    {
      recipt: "Starbucks",
      category: "Dining",
      date: "2023-10-04",
      amount: "$10.50",
    },
  ];

  return (
    <>
      <div className="search_container border border-red">
        <div className="searching_field flex justify-around pb-4">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Transaction"
            className="p-2 rounded border"
          />
          <div className="sort flex gap-2 items-center">
            <label htmlFor="sort">Sort by</label>
            <select name="sort_by" id="sorting" className="rounded px-8 py-2">
              <option value>Latest</option>
              <option value>Oldest</option>
              <option value>A to Z</option>
              <option value>Z to A</option>
              <option value>Highest</option>
              <option value>Lowest</option>
            </select>
          </div>
          <div className="filter flex gap-2 items-center">
            <label htmlFor="sort">Filter by Category</label>
            <select
              name="filter_by"
              id="filtering"
              className="rounded px-8 py-2"
            >
              <option value>All Transactions</option>
              <option value>Entertainment</option>
              <option value>Bill</option>
              <option value>Groceries</option>
              <option value>Dining Out</option>
              <option value>Transportaion</option>
            </select>
          </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Recipient / Sender
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Transaction Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {transaction.recipt}
                    </th>
                    <td class="px-6 py-4">{transaction.category}</td>
                    <td class="px-6 py-4">{transaction.date}</td>
                    <td class="px-6 py-4">{transaction.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination_buttons flex justify-around pt-8 gap-x-96">
          <button class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Prev
          </button>
          <button class="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
