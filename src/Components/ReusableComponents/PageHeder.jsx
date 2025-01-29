import { Typography } from "@material-tailwind/react";

export default function PageHeader({
  headerText = "",
  buttonText = "",
  buttonFunction = () => {},
}) {
  return (
    <>
      <div className="transaction_container w-screen py-4 absolute left-0 top-0">
        <header className="flex justify-between items-center px-24">
          <Typography variant="h1">{headerText}</Typography>
          <button onClick={buttonFunction}>{buttonText}</button>
        </header>
      </div>
    </>
  );
}
