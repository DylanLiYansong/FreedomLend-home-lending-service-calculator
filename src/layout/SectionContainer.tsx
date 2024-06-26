import React, { ReactNode, useState } from "react";
import { Paper, Box, Collapse } from "@mui/material";
import Header from "@/layout/SectionHeader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
export const sectionContainerStyle = {
  minWidth: "850px",
  maxWidth: "1280px",
  width: "auto",
  margin: "32px",
};

interface SectionProps {
  children: ReactNode;
  headerText: string;
  addButtonLable: string;
  numberOfInstances: number;
  addInstanceDispatch: AppDispatch;
}
const SectionContainer = ({
  children,
  headerText,
  numberOfInstances,
  addButtonLable,
  addInstanceDispatch,
}: SectionProps) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen((prev) => !prev);
  const dispatch = useDispatch();
  const handleAddInstance = () => {
    dispatch(addInstanceDispatch);
  };
  const childComponent = <Box>{children}</Box>;

  return (
    <Paper elevation={3} sx={sectionContainerStyle}>
      <Header
        headerText={headerText}
        addButtonLable={addButtonLable}
        handleClickHeader={handleChange}
        handleAddbutton={handleAddInstance}
        count={!open ? `(${numberOfInstances})` : ""}
      />
      <Collapse
        in={open}
        style={{ transformOrigin: "0 0 0" }}
        {...(open ? { timeout: 300 } : {})}
      >
        {childComponent}
      </Collapse>
    </Paper>
  );
};

export default SectionContainer;
