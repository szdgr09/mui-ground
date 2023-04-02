import { DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import AdapterDateFns from "@date-io/date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schama";

import React from "react";
import { Button } from "@mui/material";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dateRef = useRef(null);

  console.log("ref", { test: dateRef.current });

  const handleFormSubmit = (data) => {
    console.log({ test: data });
  };

  const formVal = getValues();

  console.log({ errors });
  console.log({ formVal });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p>{formVal?.startDate?.toLocaleDateString()}</p>
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, onBlur, value, ref, ...others } }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  size="small"
                  label="test"
                  inputRef={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  slotProps={{
                    textField: {
                      size: "small",
                    },
                  }}
                  {...others}
                />
              </LocalizationProvider>
            );
          }}
        />
        {errors.startDate && <span>{errors.startDate.message}</span>}
        <Controller
          control={control}
          name="endDate"
          render={({ field: { onChange, onBlur, value, ref, ...others } }) => {
            console.log({ others });
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  size="small"
                  label="test"
                  inputRef={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  slotProps={{
                    textField: {
                      size: "small",
                    },
                  }}
                />
              </LocalizationProvider>
            );
          }}
        />
        {errors.endDate && <span>{errors.endDate.message}</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
