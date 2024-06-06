import React from "react";

import TextfieldGroup from "@/layout/TextfieldGroup";

const fields = {
  fieldsInfo: [
    {
      id: "annualBaseIncome",
      label: "Base Income",
      variant: "outlined",
      type: "number",
    },
    {
      id: "annualNonBaseIncome",
      label: "Non-base Income",
      variant: "outlined",
      type: "number",
    },
    {
      id: "annualBonusIncome",
      label: "Bonus",
      variant: "outlined",
      type: "number",
    },
  ],
};
const Income = () => {
  return <TextfieldGroup fields={fields} />;
};

export default Income;
