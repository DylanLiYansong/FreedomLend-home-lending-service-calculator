import React, { FC } from "react";
import TextFieldGroup from "@/layout/TextFieldGroup";
import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { singleInstanceStyles as styles } from "@/styles/singleInstanceStyle";
import {
  getFields,
  SectionNames,
  SectionPlus,
} from "@/utils/interfaces/FieldInterface";

interface SingleInstanceProps {
  instanceIndex: number;
  instanceId: string;
  section: SectionPlus;
  deleteEnabled: boolean;
  handleDeleteInstance: () => void;
}
const SingleInstance: FC<SingleInstanceProps> = ({
  instanceIndex,
  section,
  instanceId,
  deleteEnabled,
  handleDeleteInstance,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">
          {SectionNames[section]} {instanceIndex + 1}
        </Typography>
        {deleteEnabled && (
          <IconButton sx={{ height: "32px" }} onClick={handleDeleteInstance}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={styles.textFieldGroups}>
        <TextFieldGroup
          fields={getFields({
            section,
            instanceId,
          })}
        />
        <TextFieldGroup
          fields={getFields({
            section: SectionPlus.ApplicantsExpense,
            instanceId,
          })}
        />
      </Box>
    </Box>
  );
};

export default SingleInstance;
