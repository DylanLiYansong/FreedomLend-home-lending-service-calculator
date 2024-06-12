import React from "react";
import { Box } from "@mui/material";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import NumericInput from "./NumericInput";
import { getTextFieldGroupStyle } from "@/styles/singleInstanceStyle";
import { Section } from "@/utils/interfaces/FieldInterface";

const TextFieldGroup = ({
  fields,
  section,
}: {
  section?: Section;
  fields: FieldInterface[];
}) => {
  const styles = getTextFieldGroupStyle(section);
  return (
    <Box sx={styles.textFieldGroups}>
      {fields.map((field) => {
        return <NumericInput key={field.label} field={field} />;
      })}
    </Box>
  );
};

export default TextFieldGroup;
