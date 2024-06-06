import React, { ReactNode } from "react";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Box } from "@mui/material";
const containerStyles: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "16px",
    gap: "16px",
    maxWidth: "100%",
    overflowX: "auto",
    minHeight: "250px",
  },
};
const InstanceListContainer = ({ children }: { children: ReactNode }) => {
  return <Box sx={containerStyles.container}>{children}</Box>;
};

export default InstanceListContainer;
