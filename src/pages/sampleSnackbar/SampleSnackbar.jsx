import React from "react";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";

const SampleSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <div>
      {" "}
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </div>
  );
};

export default SampleSnackbar;
