import React from "react";
import { Box } from "@mui/material";
import { FieldInterface } from "@/utils/constant/Fields";
import NumericInput from "./NumericInput";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/constant/Fields";
import {
  shareableCommitmentTypes,
  nonShareableCommitmentTypes,
} from "@/utils/constant/SectionLabels";
import Selector from "./Selector";
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
        <Selector options={shareableCommitmentTypes} />
      )}
      {section === Section.NonShareableCommitments && (
        <Selector options={nonShareableCommitmentTypes} />
      )}
      {fields.map((field) => {
        return <NumericInput key={field.id} field={field} />;
      })}
    </Box>
  );
};

export default TextFieldGroup;
