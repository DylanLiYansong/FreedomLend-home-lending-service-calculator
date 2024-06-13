import React from "react";
import { TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const CommitmentTypeSelectInput = () => {
  return (
    <div>
      <TextField
        id="select-shareable-commitmenttype"
        select
        size="small"
        sx={{
          minWidth: "200px",
          "& .MuiInputBase-root": {
            height: 45,
          },
          "& .MuiInputBase-input": {
            height: "100%",
            boxSizing: "border-box",
          },
        }}
        SelectProps={{
          native: true,
          input: <BootstrapInput />,
        }}
        variant="standard"
      >
        {TYPES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
};

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    fontSize: 14,
    // padding: "8px 18px 8px 10px",
  },
}));
const TYPES = [
  {
    value: "mortgageOO",
    label: "Mortgage - OO",
  },
  {
    value: "mortgageIPL",
    label: "Mortgage - IPL",
  },
  {
    value: "creditCard",
    label: "Credit card",
  },
  {
    value: "hirePurchase/Leasing",
    label: "Hire purchase/leasing",
  },
  {
    value: "personalLoan",
    label: "Personal loan",
  },
  {
    value: "loc(secured)",
    label: "Line of credit (secured)",
  },
  {
    value: "loc(unsecured)",
    label: "Line of credit (unsecured)",
  },
  {
    value: "marginLoan",
    label: "Margin loan",
  },
  {
    value: "overdraft",
    label: "Overdraft",
  },
  {
    value: "storeAccount",
    label: "Store account",
  },
  {
    value: "other",
    label: "Other",
  },
];
export default CommitmentTypeSelectInput;
