import * as yup from "yup";

const schema = yup.object().shape({
  startDate: yup.date().required("Start Date is required"),
  endDate: yup
    .date()
    .required("End Date is required")
    .min(yup.ref("startDate"), "End Date must be after Start Date"),
});

export default schema;
