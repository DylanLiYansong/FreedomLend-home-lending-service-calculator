import React from "react";
import { Box } from "@mui/material";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import NumericrInput from "./NumericInput";

const TextFieldGroup = ({ fields }: { fields: FieldInterface[] }) => {
  return (
    <Box>
      {fields.map((field) => {
        return <NumericrInput key={field.label} field={field} />;
      })}
    </Box>
  );
};

export default TextFieldGroup;
