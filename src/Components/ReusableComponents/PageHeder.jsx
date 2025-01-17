export default function PageHeader({
  headerText = "",
  buttonText = "",
  buttonFunction = () => {},
}) {
  return (
    <>
      <div className="transaction_container w-screen py-4 ">
        <header className="flex justify-between  items-center px-24">
          <h1 className="font-bold">{headerText}</h1>
          <button onClick={buttonFunction}>{buttonText}</button>
        </header>
      </div>
    </>
  );
}
