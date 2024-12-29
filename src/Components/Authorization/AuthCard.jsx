import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {subtitle}
      </Typography>
      <form className="mt-8 w-full max-w-md">{children}</form>
    </Card>
  );
};

export default AuthCard;
