import React from "react";
import TextfieldGroup from "@/layout/TextfieldGroup";

const fields = {
  fieldsInfo: [
    {
      id: "monthlyLivingExpenses",
      label: "Basic Expense",
      type: "number",
    },
    {
      id: "monthlyOtherExpenses",
      label: "Other expenses",
      type: "number",
    },
    {
      id: "childSupport",
      label: "Child support",
      type: "number",
    },
    {
      id: "monthlyRent",
      label: "Rent",
      type: "number",
    },
  ],
};
const Expense = () => {
  return <TextfieldGroup fields={fields} />;
};

export default Expense;
