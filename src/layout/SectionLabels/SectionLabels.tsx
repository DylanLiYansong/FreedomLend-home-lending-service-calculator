import React from "react";
import { Box, Typography } from "@mui/material";
import { Section } from "@/utils/constant/Fields";
import { getLabelContainerStyle } from "@/styles/labelContainerStyle";

const SectionLabels = ({
  labels,
  section,
}: {
  labels: string[];
  section: Section;
}) => {
  const styles = getLabelContainerStyle(section);

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

export default SectionLabels;
