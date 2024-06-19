import React from "react";
import { TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { INPUT_FIELD_WIDTH } from "@/utils/constant/Fields";
export interface IOption {
  value: string;
  label: string;
}
const Selector = ({ options }: { options: IOption[] }) => {
  return (
    <div>
      <TextField
        id="select-shareable-commitmenttype"
        select
        size="small"
        sx={{
          minWidth: INPUT_FIELD_WIDTH,
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
        {options.map((option) => (
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
    padding: "8px 18px 8px 10px",
  },
}));

export default Selector;
