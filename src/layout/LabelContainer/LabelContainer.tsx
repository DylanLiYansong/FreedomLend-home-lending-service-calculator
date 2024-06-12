import React from "react";
import { Box, Typography } from "@mui/material";
import { SectionPlus } from "@/utils/interfaces/FieldInterface";
import { getLabelContainerStyle } from "@/styles/labelContainerStyle";

const LabelContainer = ({
  labels,
  sectionName,
}: {
  labels: string[];
  sectionName: SectionPlus;
}) => {
  const styles = getLabelContainerStyle(sectionName);

  return (
    <Box sx={styles.container}>
      {labels.map((label, i) => (
        <Box key={i} sx={styles.labels}>
          <Typography variant="body2">{label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LabelContainer;
