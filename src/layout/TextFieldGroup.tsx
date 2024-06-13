import React from "react";
import { Box } from "@mui/material";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import NumericInput from "./NumericInput";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/interfaces/FieldInterface";
import CommitmentTypeSelectInput from "@/components/ShareableCommitments/components/CommitmentType/CommitmentTypeSelectInput";

const normalStyles: SxPropsStyles = {
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
  },
};

const applicantStyles: SxPropsStyles = {
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
    "&>*:nth-child(4)": {
      marginTop: "25px",
    },
  },
};
const TextFieldGroup = ({
  fields,
  section,
}: {
  section: Section;
  fields: FieldInterface[];
}) => {
  const styles =
    section === Section.Applicants ? applicantStyles : normalStyles;
  return (
    <Box sx={styles.textFieldGroups}>
      {section === Section.ShareableCommitments && (
        <CommitmentTypeSelectInput />
      )}
      {fields.map((field) => {
        return <NumericInput key={field.id} field={field} />;
      })}
    </Box>
  );
};

export default TextFieldGroup;
