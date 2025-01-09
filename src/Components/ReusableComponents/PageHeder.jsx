export default function PageHeader({
  headerText = "",
  buttonText = "",
  buttonFunction = () => {},
}) {
  return (
    <>
      <div className="transaction_container w-screen py-8 ">
        <header className="transaction_header flex justify-around  items-center ">
          <h1 className="font-bold">{headerText}</h1>
          <button
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            onClick={buttonFunction}
          >
            {buttonText}
          </button>
        </header>
      </div>
    </>
  );
}
