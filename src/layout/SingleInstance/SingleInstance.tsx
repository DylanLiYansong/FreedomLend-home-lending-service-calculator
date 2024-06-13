import React, { FC } from "react";
import TextFieldGroup from "@/layout/TextFieldGroup";
import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { singleInstanceContainerStyle as styles } from "@/styles/singleInstanceStyle";

import {
  getFields,
  SectionNames,
  Section,
} from "@/utils/interfaces/FieldInterface";
interface SingleInstanceProps {
  instanceIndex: number;
  instanceId: string;
  section: Section;
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
        <Typography variant="subtitle1">
          {SectionNames[section]} {instanceIndex + 1}
        </Typography>
        {deleteEnabled && (
          <IconButton onClick={handleDeleteInstance}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <TextFieldGroup
        section={section}
        fields={getFields({
          section,
          instanceId,
        })}
      />
    </Box>
  );
};

export default SingleInstance;
