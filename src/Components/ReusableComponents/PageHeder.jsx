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
          <button onClick={buttonFunction}>{buttonText}</button>
        </header>
      </div>
    </>
  );
}
