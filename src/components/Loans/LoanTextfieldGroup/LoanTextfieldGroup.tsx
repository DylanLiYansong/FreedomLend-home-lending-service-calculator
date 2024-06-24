import React from "react";
import { Box } from "@mui/material";
import { FieldInterface } from "@/utils/constant/Fields";
import NumericInput from "@/layout/NumericInput";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/constant/Fields";

// import Selector from "./Selector";
const styles: SxPropsStyles = {
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
  },
};
const LoanTextFieldGroup = ({
  fields,
  section,
}: {
  section: Section;
  fields: FieldInterface[];
}) => {
  return (
    <Box sx={styles.textFieldGroups}>
      {fields.map((field) => {
        return <NumericInput key={field.id} field={field} />;
      })}
    </Box>
  );
};

export default LoanTextFieldGroup;
