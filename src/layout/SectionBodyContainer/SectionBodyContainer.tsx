import React from "react";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Box } from "@mui/material";
const styles: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "8px",
    padding: "8px",
  },
};
const SectionBodyContainer = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={styles.container}>{children}</Box>;
};

export default SectionBodyContainer;
